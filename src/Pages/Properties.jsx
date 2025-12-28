import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDarkMode } from "../components/DarkModeContext";
import { property } from "../components/export";
import { Filter, RotateCcw, X, Plus } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import Modal from "../components/Modal";
import { Bath, BedDouble, LayoutDashboard, UserCircle, Phone, Mail, Calendar, Eye, Share2, Heart, MapPin, Building2, Star, ShieldCheck, Clock, Users, PiggyBank } from "lucide-react";
import heroImage from "../assets/images/property1.webp";

const Properties = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(property);
  const [visibleCount, setVisibleCount] = useState(6);
  const [filters, setFilters] = useState({
    location: searchParams.get("city") || "",
    type: searchParams.get("type") || "",
    priceRange: "",
    bedrooms: "",
    featured: false,
    minPrice: "",
    maxPrice: ""
  });
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(true); // Default show on this page
  const [activeFilters, setActiveFilters] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { darkMode } = useDarkMode();

  const convertPriceToLakhs = (priceString) => {
    if (!priceString) return 0;
    const normalized = String(priceString).replace(/,/g, '').toLowerCase();
    const valueMatch = normalized.match(/([\d.]+)/);
    const value = valueMatch ? parseFloat(valueMatch[1]) : 0;
    if (normalized.includes('cr')) return value * 100; // convert Crores to Lakhs
    return value; // assume already in Lakhs
  };

  useEffect(() => {
    // Update filters from URL params when they change
    setFilters(prev => ({
      ...prev,
      type: searchParams.get("type") || prev.type,
      location: searchParams.get("city") || searchParams.get("area") || prev.location,
    }));
    
    // Also handle 'bhk' param if present in a simple way
    const bhkParam = searchParams.get("bhk");
    if (bhkParam) {
      // Extract number from "2 BHK" -> "2"
      const match = bhkParam.match(/(\d+)/);
      if (match) {
        setFilters(prev => ({ ...prev, bedrooms: match[1] }));
      }
    }
  }, [searchParams]);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      location: "",
      type: "",
      priceRange: "",
      bedrooms: "",
      featured: false,
      minPrice: "",
      maxPrice: ""
    });
    setSortBy("newest");
    setActiveFilters([]);
    setVisibleCount(6);
    setSearchParams({}); // Clear URL params
  };

  const removeFilter = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: filterType === 'featured' ? false : ""
    }));
    
    // Also remove from URL if it matches
    const newParams = new URLSearchParams(searchParams);
    if (filterType === 'type') newParams.delete('type');
    if (filterType === 'location') {
        newParams.delete('city');
        newParams.delete('area');
    }
    setSearchParams(newParams);
  };

  const applyFilters = () => {
    let filtered = property;
    const newActiveFilters = [];

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(prop => 
        prop.address.toLowerCase().includes(filters.location.toLowerCase()) || 
        (prop.city && prop.city.toLowerCase().includes(filters.location.toLowerCase()))
      );
      newActiveFilters.push({ type: 'location', value: filters.location, label: filters.location });
    }

    // Type filter
    if (filters.type) {
      filtered = filtered.filter(prop => prop.type.toLowerCase() === filters.type.toLowerCase());
      newActiveFilters.push({ type: 'type', value: filters.type, label: filters.type });
    }

    // Bedrooms filter
    if (filters.bedrooms) {
      filtered = filtered.filter(prop => prop.bed.toString() === filters.bedrooms.toString());
      newActiveFilters.push({ type: 'bedrooms', value: filters.bedrooms, label: filters.bedrooms + ' Bedroom' + (filters.bedrooms > 1 ? 's' : '') });
    }

    // Featured filter
    if (filters.featured) {
      filtered = filtered.filter(prop => prop.featured);
      newActiveFilters.push({ type: 'featured', value: true, label: 'Featured Only' });
    }

    // Price range filter
    if (filters.minPrice || filters.maxPrice) {
      filtered = filtered.filter(prop => {
        const price = convertPriceToLakhs(prop.price);
        const min = filters.minPrice ? parseFloat(filters.minPrice) : 0;
        const max = filters.maxPrice ? parseFloat(filters.maxPrice) : Infinity;
        return price >= min && price <= max;
      });
      
      if (filters.minPrice || filters.maxPrice) {
        const priceLabel = `${filters.minPrice || '0'}L - ${filters.maxPrice || 'Max'}L`;
        newActiveFilters.push({ type: 'price', value: priceLabel, label: 'Price: ' + priceLabel });
      }
    }

    // Sort properties
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => convertPriceToLakhs(a.price) - convertPriceToLakhs(b.price));
        break;
      case "price-high":
        filtered.sort((a, b) => convertPriceToLakhs(b.price) - convertPriceToLakhs(a.price));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "views":
        filtered.sort((a, b) => b.views - a.views);
        break;
      default:
        // Keep original order for "newest"
        break;
    }

    setFilteredProperties(filtered);
    setActiveFilters(newActiveFilters);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, sortBy]);

  const getPropertyTypes = () => {
    const types = [...new Set(property.map(prop => prop.type))];
    return types;
  };

  const getBedroomOptions = () => {
    const beds = [...new Set(property.map(prop => prop.bed))].sort((a, b) => a - b);
    return beds;
  };

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };
  
  const closeModal = () => setShowModal(false);

  const renderStars = (rating) => {
      return Array.from({ length: 5 }, (_, i) => (
        <Star 
          key={i} 
          className={`${i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"} w-3 h-3 sm:w-3.5 sm:h-3.5`}
        />
      ));
    };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
           <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
             {filters.type ? `${filters.type} For Sale` : "Find Your Dream Property"} 
             {filters.location ? <span className="text-green-400"> in {filters.location}</span> : ""}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found matching your criteria.
            Explore our premium listings designed for modern living.
          </p>
        </div>
      </div>

      <div className={`min-h-screen pt-12 pb-12 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
             <div className="text-gray-600 dark:text-gray-300 font-medium">
                Showing {Math.min(visibleCount, filteredProperties.length)} of {filteredProperties.length} Properties
             </div>
             
             <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-green-200 dark:shadow-none shadow-lg"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? 'Hide Filters' : 'Filter Properties'}
              </button>
          </div>

          {/* Filters Section */}
          {showFilters && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <select
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                >
                  <option value="">All Locations</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Bhubaneswar">Bhubaneswar</option>
                  <option value="Puri">Puri</option>
                </select>

                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                >
                  <option value="">All Types</option>
                  {getPropertyTypes().map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                 <select
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                  className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                >
                  <option value="">Any Bedrooms</option>
                  {getBedroomOptions().map(bed => (
                    <option key={bed} value={bed}>{bed} Bedroom{bed > 1 ? 's' : ''}</option>
                  ))}
                </select>
                
                 <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="views">Most Viewed</option>
                  </select>
              </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                  <input
                    type="number"
                    placeholder="Min Price (Lakhs)"
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Max Price (Lakhs)"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.featured}
                      onChange={(e) => handleFilterChange('featured', e.target.checked)}
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span>featured Only</span>
                  </label>
                  
                  {activeFilters.length > 0 && (
                      <button
                        onClick={clearAllFilters}
                        className="flex items-center justify-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Clear All
                      </button>
                    )}
               </div>

              {activeFilters.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeFilters.map((filter, index) => (
                    <div key={index} className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                      <span>{filter.label}</span>
                      <button
                        onClick={() => removeFilter(filter.type, filter.value)}
                        className="hover:bg-green-200 dark:hover:bg-green-800 rounded-full p-0.5"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.slice(0, visibleCount).map((item, index) => (
                <PropertyCard key={index} item={item} handleViewDetails={handleViewDetails} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">No properties found</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Try adjusting your search criteria or clear filters
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
          
           {filteredProperties.length > visibleCount && (
            <div className="flex justify-center mt-12">
               <button 
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-green-600 text-green-600 dark:text-green-400 px-8 py-3 rounded-full hover:bg-green-50 dark:hover:bg-gray-700 transition-colors font-semibold shadow-sm"
              >
                <Plus className="w-5 h-5" />
                Load More Properties
              </button>
            </div>
          )}

          {/* Why Choose Us Section */}
          <div className="mt-20 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Property Bundle?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, title: "Verified Listings", desc: "Every property is physically verified by our experts to ensure authenticity." },
                { icon: Clock, title: "Fast Processing", desc: "Streamlined documentation and quick loan approvals." },
                { icon: Users, title: "Expert Support", desc: "Dedicated relationship managers to guide you through every step." },
                { icon: PiggyBank, title: "Best Price Guarantee", desc: "We negotiate the best deals directly with owners and developers." }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-transparent hover:border-green-600 transition-all text-center group cursor-default">
                  <div className="w-14 h-14 mx-auto bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="text-green-600 w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative rounded-2xl overflow-hidden bg-green-700 text-white p-8 md:p-12 text-center mb-12 shadow-xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
              <p className="text-green-100 mb-8 text-lg">
                We have access to exclusive off-market listings and upcoming projects. 
                Tell us your requirements and let us find your dream home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors shadow-md">
                   Contact an Agent
                 </button>
                 <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors text-white">
                   Post Requirement
                 </button>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>

        </div>
      </div>
      
       {/* Reusing the Modal from Properties.jsx logic, but here inside a custom Modal wrapper or just inline if we want full custom modal again. 
          For consistency with previous Modal implementations, I'll use a local modal structure similar to Properties.jsx for now to ensure all fields match. 
       */}
       {showModal && selectedProperty && (
         <div 
           className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4"
           onClick={closeModal}
         >
           <div 
             className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative"
             onClick={(e) => e.stopPropagation()}
           >
              <div className="relative h-64 md:h-80">
                  <img 
                    src={selectedProperty.images} 
                    alt={selectedProperty.name}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                   <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <X size={24} />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                     <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-green-600 rounded-full text-xs font-semibold uppercase">{selectedProperty.type}</span>
                        <span className="px-3 py-1 bg-green-600 rounded-full text-xs font-semibold uppercase">{selectedProperty.status}</span>
                     </div>
                     <h2 className="text-3xl font-bold mb-1">{selectedProperty.name}</h2>
                     <p className="flex items-center gap-2 text-gray-200">
                        <MapPin size={16} />
                        {selectedProperty.address}
                     </p>
                  </div>
              </div>
              
              <div className="p-6 md:p-8">
                 <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-grow">
                       <div className="grid grid-cols-4 gap-4 mb-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                          <div className="text-center">
                              <BedDouble className="mx-auto text-green-600 mb-2" size={24} />
                              <div className="font-bold text-lg">{selectedProperty.bed}</div>
                              <div className="text-xs text-gray-500">Beds</div>
                          </div>
                          <div className="text-center">
                              <Bath className="mx-auto text-green-600 mb-2" size={24} />
                              <div className="font-bold text-lg">{selectedProperty.bath}</div>
                              <div className="text-xs text-gray-500">Baths</div>
                          </div>
                           <div className="text-center">
                              <LayoutDashboard className="mx-auto text-green-600 mb-2" size={24} />
                              <div className="font-bold text-lg">{selectedProperty.area}</div>
                              <div className="text-xs text-gray-500">Area</div>
                          </div>
                           <div className="text-center">
                              <Star className="mx-auto text-yellow-500 mb-2" size={24} />
                              <div className="font-bold text-lg">{selectedProperty.rating}</div>
                              <div className="text-xs text-gray-500">Rating</div>
                          </div>
                       </div>
                       
                       <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4">Description</h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {selectedProperty.about}
                          </p>
                       </div>
                       
                       <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4">Amenities</h3>
                          <div className="flex flex-wrap gap-2">
                             {selectedProperty.amenities.map((amenity, idx) => (
                                <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                                   {amenity}
                                </span>
                             ))}
                          </div>
                       </div>
                    </div>
                    
                    <div className="md:w-80 flex-shrink-0">
                       <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 sticky top-4">
                          <div className="text-3xl font-bold text-green-600 mb-6">{selectedProperty.price}</div>
                          
                          <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                             <UserCircle size={40} className="text-gray-400" />
                             <div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Owner</div>
                                <div className="font-semibold">{selectedProperty.owner}</div>
                             </div>
                          </div>
                          
                          <div className="space-y-3">
                             <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2">
                                <Phone size={18} />
                                Contact Owner
                             </button>
                             <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
                                <Calendar size={18} />
                                Schedule Visit
                             </button>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
         </div>
       )}

      <Footer />
    </>
  );
};

export default Properties;
