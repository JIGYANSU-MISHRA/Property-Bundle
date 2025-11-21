import React, { useEffect, useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { property } from "../components/export";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaPlus,
  FaHeart,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
  FaStar,
  FaEye,
  FaFilter,
  FaTimes,
  FaUndo,
  FaPhone,
  FaEnvelope,
  FaCalendar,
  FaParking,
  FaSwimmingPool,
  FaWifi,
  FaShieldAlt,
  FaTree,
  FaBuilding,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Properties = () => {
  const [filteredProperties, setFilteredProperties] = useState(property);
  const [filters, setFilters] = useState({
    type: "",
    priceRange: "",
    bedrooms: "",
    featured: false,
    minPrice: "",
    maxPrice: ""
  });
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const { darkMode} = useDarkMode();

  const convertPriceToLakhs = (priceString) => {
    if (!priceString) return 0;
    const normalized = String(priceString).replace(/,/g, '').toLowerCase();
    const valueMatch = normalized.match(/([\d.]+)/);
    const value = valueMatch ? parseFloat(valueMatch[1]) : 0;
    if (normalized.includes('cr')) return value * 100; // convert Crores to Lakhs
    return value; // assume already in Lakhs
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      type: "",
      priceRange: "",
      bedrooms: "",
      featured: false,
      minPrice: "",
      maxPrice: ""
    });
    setSortBy("newest");
    setActiveFilters([]);
  };

  const removeFilter = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: filterType === 'featured' ? false : ""
    }));
    setActiveFilters(prev => prev.filter(f => !(f.type === filterType && f.value === value)));
  };

  const applyFilters = () => {
    let filtered = property;
    const newActiveFilters = [];

    // Type filter
    if (filters.type) {
      filtered = filtered.filter(prop => prop.type === filters.type);
      newActiveFilters.push({ type: 'type', value: filters.type, label: filters.type });
    }

    // Bedrooms filter
    if (filters.bedrooms) {
      filtered = filtered.filter(prop => prop.bed.toString() === filters.bedrooms);
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar 
        key={i} 
        className={`${i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"} w-3 h-3 sm:w-3.5 sm:h-3.5`}
      />
    ));
  };

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
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProperty(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-gray-100 text-black"}>
      <section
        id="properties"
        className="lg:w-[90%] w-full m-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 lg:py-20 flex flex-col gap-6 sm:gap-8 lg:gap-10"
      >
        <div className="flex flex-col items-start gap-3 sm:gap-4">
          <h1 data-aos="zoom-in" className="text-green-500 dark:text-green-400 text-xs sm:text-sm md:text-base uppercase tracking-widest">
            PROPERTIES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold"
          >
            Explore the latest
          </h1>
        </div>

        {/* Filters and Sort Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-5 lg:p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 lg:gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
              >
                <FaFilter className="text-xs sm:text-sm" />
                {showFilters ? 'Hide' : 'Show'} Filters
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 sm:px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none text-sm sm:text-base"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="views">Most Viewed</option>
              </select>

              {activeFilters.length > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center justify-center gap-2 bg-gray-500 text-white px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors text-xs sm:text-sm"
                >
                  <FaUndo className="text-xs sm:text-sm" />
                  Clear All
                </button>
              )}
            </div>

            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center sm:text-left">
              {filteredProperties.length} properties found
            </div>
          </div>

          {/* Active Filters Display */}
          {activeFilters.length > 0 && (
            <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
              {activeFilters.map((filter, index) => (
                <div key={index} className="flex items-center gap-1.5 sm:gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  <span className="whitespace-nowrap">{filter.label}</span>
                  <button
                    onClick={() => removeFilter(filter.type, filter.value)}
                    className="hover:bg-green-200 dark:hover:bg-green-800 rounded-full p-0.5 sm:p-1 flex-shrink-0"
                    aria-label="Remove filter"
                  >
                    <FaTimes size={10} className="sm:w-3 sm:h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none text-sm sm:text-base"
                >
                  <option value="">All Types</option>
                  {getPropertyTypes().map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                <select
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                  className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none text-sm sm:text-base"
                >
                  <option value="">Any Bedrooms</option>
                  {getBedroomOptions().map(bed => (
                    <option key={bed} value={bed}>{bed} Bedroom{bed > 1 ? 's' : ''}</option>
                  ))}
                </select>

                <input
                  type="number"
                  placeholder="Min Price (Lakhs)"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                  className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none text-sm sm:text-base"
                />

                <input
                  type="number"
                  placeholder="Max Price (Lakhs)"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none text-sm sm:text-base"
                />

                <label className="flex items-center gap-2 cursor-pointer sm:col-span-2 lg:col-span-1">
                  <input
                    type="checkbox"
                    checked={filters.featured}
                    onChange={(e) => handleFilterChange('featured', e.target.checked)}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 flex-shrink-0"
                  />
                  <span className="text-xs sm:text-sm">Featured Only</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Properties Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
          {filteredProperties.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div
                className="bg-cover bg-center h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] rounded-xl p-3 sm:p-4 flex flex-col justify-between relative"
                style={{ backgroundImage: `url(${item.images})` }}
              >
                <div className="flex justify-between items-start">
                  {item.featured && (
                    <button className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[10px] sm:text-xs md:text-[13px] font-semibold">
                      Featured
                    </button>
                  )}
                  <div className="flex gap-1.5 sm:gap-2">
                    <button className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[10px] sm:text-xs md:text-[13px] whitespace-nowrap">
                      {item.status}
                    </button>
                    <button className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[10px] sm:text-xs md:text-[13px] whitespace-nowrap">
                      {item.type}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 sm:gap-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-white">
                    <FaMapMarkerAlt className="text-sm sm:text-base lg:text-lg flex-shrink-0" />
                    <span className="text-xs sm:text-sm truncate">{item.address}</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 text-white">
                    <FaVideo className="text-sm sm:text-base lg:text-lg cursor-pointer hover:text-green-400 transition-colors flex-shrink-0" />
                    <FaCamera className="text-sm sm:text-base lg:text-lg cursor-pointer hover:text-green-400 transition-colors flex-shrink-0" />
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-2 sm:gap-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                  <h1 className="text-lg sm:text-xl font-semibold line-clamp-2">{item.name}</h1>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {renderStars(item.rating)}
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 ml-1">
                      ({item.rating})
                    </span>
                  </div>
                </div>
                
                <h1 className="text-xl sm:text-2xl text-green-600 font-bold">{item.price}</h1>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm line-clamp-2">{item.about}</p>

                <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <FaBath className="text-green-500 text-sm sm:text-base lg:text-lg flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{item.bath} Bath</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <FaBed className="text-green-500 text-sm sm:text-base lg:text-lg flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{item.bed} Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <MdSpaceDashboard className="text-green-500 text-sm sm:text-base lg:text-lg flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{item.area}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                  {item.amenities.slice(0, 3).map((amenity, idx) => (
                    <span key={idx} className="px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
                      {amenity}
                    </span>
                  ))}
                  {item.amenities.length > 3 && (
                    <span className="px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
                      +{item.amenities.length - 3} more
                    </span>
                  )}
                </div>

                <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-700 my-3 sm:my-4"></div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <FaUserCircle className="text-green-500 text-sm sm:text-base lg:text-lg flex-shrink-0" />
                    <span className="text-xs sm:text-sm truncate">{item.owner}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <FaEye className="text-green-500 text-sm sm:text-base flex-shrink-0" />
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mt-3 sm:mt-4">
                  <button 
                    onClick={() => handleViewDetails(item)}
                    className="bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-xs sm:text-sm font-semibold w-full sm:w-auto"
                  >
                    View Details
                  </button>
                  <div className="flex gap-2 justify-center sm:justify-end">
                    <div className="p-1.5 sm:p-2 border-2 border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition hover:scale-110">
                      <FaShareAlt className="text-green-500 text-sm sm:text-base" />
                    </div>
                    <div className="p-1.5 sm:p-2 border-2 border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition hover:scale-110">
                      <FaHeart className="text-green-500 text-sm sm:text-base" />
                    </div>
                    <div className="p-1.5 sm:p-2 border-2 border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition hover:scale-110">
                      <FaPlus className="text-green-500 text-sm sm:text-base" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-8 sm:mt-10">
            <button className="bg-green-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm sm:text-base">
              Load More Properties
            </button>
          </div>
        )}

        {/* No Results Message */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <div className="text-gray-500 dark:text-gray-400 text-base sm:text-lg mb-3 sm:mb-4 px-4">
              No properties found matching your criteria
            </div>
            <button
              onClick={clearAllFilters}
              className="bg-green-600 text-white px-5 sm:px-6 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>

      {/* Property Details Modal */}
      {showModal && selectedProperty && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-2 sm:p-3 md:p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-2xl max-w-6xl w-full max-h-[98vh] sm:max-h-[95vh] overflow-y-auto relative my-2 sm:my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative">
              <div 
                className="h-48 sm:h-56 md:h-64 lg:h-80 bg-cover bg-center rounded-t-lg sm:rounded-t-xl"
                style={{ backgroundImage: `url(${selectedProperty.images})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-t-lg sm:rounded-t-xl"></div>
                
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-white dark:bg-gray-800 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
                  aria-label="Close modal"
                >
                  <FaTimes className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl" />
                </button>

                {/* Property Badges */}
                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProperty.featured && (
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-600 text-white rounded-full text-[10px] sm:text-xs md:text-sm font-semibold">
                      Featured
                    </span>
                  )}
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-600 text-white rounded-full text-[10px] sm:text-xs md:text-sm font-semibold">
                    {selectedProperty.status}
                  </span>
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-600 text-white rounded-full text-[10px] sm:text-xs md:text-sm font-semibold">
                    {selectedProperty.type}
                  </span>
                </div>

                {/* Property Title and Price */}
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 text-white">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 line-clamp-2">{selectedProperty.name}</h2>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <FaMapMarkerAlt className="text-green-400 text-sm sm:text-base flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base truncate">{selectedProperty.address}</span>
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
                      {selectedProperty.price}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-3 sm:p-4 md:p-6 lg:p-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-4 sm:mb-6 md:mb-8 pb-4 sm:pb-6 md:pb-8 border-b border-gray-200 dark:border-gray-700">
                <div className="text-center p-2 sm:p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FaBed className="text-green-600 dark:text-green-400 text-lg sm:text-xl md:text-2xl mx-auto mb-1 sm:mb-2" />
                  <div className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white">{selectedProperty.bed}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-300">Bedrooms</div>
                </div>
                <div className="text-center p-2 sm:p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FaBath className="text-green-600 dark:text-green-400 text-lg sm:text-xl md:text-2xl mx-auto mb-1 sm:mb-2" />
                  <div className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white">{selectedProperty.bath}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-300">Bathrooms</div>
                </div>
                <div className="text-center p-2 sm:p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <MdSpaceDashboard className="text-green-600 dark:text-green-400 text-lg sm:text-xl md:text-2xl mx-auto mb-1 sm:mb-2" />
                  <div className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white break-words">{selectedProperty.area}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-300">Area</div>
                </div>
                <div className="text-center p-2 sm:p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center justify-center gap-0.5 sm:gap-1 mb-1 sm:mb-2">
                    {renderStars(selectedProperty.rating)}
                  </div>
                  <div className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white">{selectedProperty.rating}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-300">Rating</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-3 md:mb-4">Description</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedProperty.about}
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-3 md:mb-4">Amenities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                  {selectedProperty.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 sm:p-2.5 md:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 break-words">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Details Grid */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
                {/* Owner Information */}
                <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <FaUserCircle className="text-green-600 dark:text-green-400 text-base sm:text-lg md:text-xl flex-shrink-0" />
                    <span>Owner Information</span>
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                      <FaUserCircle className="text-green-600 dark:text-green-400 text-lg sm:text-xl flex-shrink-0 mt-0.5 sm:mt-0" />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Owner</div>
                        <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-white break-words">{selectedProperty.owner}</div>
                      </div>
                    </div>
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                      <FaPhone className="text-green-600 dark:text-green-400 text-lg sm:text-xl flex-shrink-0 mt-0.5 sm:mt-0" />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Phone</div>
                        <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-white break-words">+91 99999 99999</div>
                      </div>
                    </div>
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                      <FaEnvelope className="text-green-600 dark:text-green-400 text-lg sm:text-xl flex-shrink-0 mt-0.5 sm:mt-0" />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Email</div>
                        <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-white break-all">{selectedProperty.owner.toLowerCase().replace(/\s+/g, '')}@propertybundle.com</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property Statistics */}
                <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <FaBuilding className="text-green-600 dark:text-green-400 text-base sm:text-lg md:text-xl flex-shrink-0" />
                    <span>Property Statistics</span>
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">Views</span>
                      <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                        <FaEye className="text-green-600 dark:text-green-400 text-sm sm:text-base flex-shrink-0" />
                        {selectedProperty.views.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">Property Type</span>
                      <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-white">{selectedProperty.type}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">Status</span>
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold w-fit">
                        {selectedProperty.status}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">Rating</span>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        {renderStars(selectedProperty.rating)}
                        <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-white">
                          {selectedProperty.rating}/5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 bg-green-600 text-white py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold text-xs sm:text-sm md:text-base flex items-center justify-center gap-1.5 sm:gap-2">
                  <FaPhone className="text-xs sm:text-sm md:text-base" />
                  <span>Contact Owner</span>
                </button>
                <button className="flex-1 bg-blue-600 text-white py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-xs sm:text-sm md:text-base flex items-center justify-center gap-1.5 sm:gap-2">
                  <FaCalendar className="text-xs sm:text-sm md:text-base" />
                  <span>Schedule Visit</span>
                </button>
                <button className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold text-xs sm:text-sm md:text-base flex items-center justify-center gap-1.5 sm:gap-2">
                  <FaShareAlt className="text-xs sm:text-sm md:text-base" />
                  <span>Share</span>
                </button>
                <button className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold text-xs sm:text-sm md:text-base flex items-center justify-center gap-1.5 sm:gap-2">
                  <FaHeart className="text-xs sm:text-sm md:text-base" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Properties;
