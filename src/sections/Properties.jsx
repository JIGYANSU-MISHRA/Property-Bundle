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
        className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"} 
        size={14} 
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

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-gray-100 text-black"}>
      <section
        id="properties"
        className="lg:w-[90%] w-full m-auto lg:px-20 px-6 py-20 flex flex-col gap-10"
      >
        <div className="flex flex-col items-start gap-4">
          <h1 data-aos="zoom-in" className="text-green-500 dark:text-green-400">
            PROPERTIES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-4xl font-semibold"
          >
            Explore the latest
          </h1>
        </div>

        {/* Filters and Sort Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <FaFilter />
                {showFilters ? 'Hide' : 'Show'} Filters
              </button>
              
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

              {activeFilters.length > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-2 bg-gray-500 text-white px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors text-sm"
                >
                  <FaUndo />
                  Clear All
                </button>
              )}
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-300">
              {filteredProperties.length} properties found
            </div>
          </div>

          {/* Active Filters Display */}
          {activeFilters.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {activeFilters.map((filter, index) => (
                <div key={index} className="flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                  <span>{filter.label}</span>
                  <button
                    onClick={() => removeFilter(filter.type, filter.value)}
                    className="hover:bg-green-200 dark:hover:bg-green-800 rounded-full p-1"
                  >
                    <FaTimes size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-4">
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                >
                  <option value="">All Types</option>
                  {getPropertyTypes().map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                <select
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                  className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
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
                  className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <input
                  type="number"
                  placeholder="Max Price (Lakhs)"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.featured}
                    onChange={(e) => handleFilterChange('featured', e.target.checked)}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="text-sm">Featured Only</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Properties Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {filteredProperties.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div
                className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between relative"
                style={{ backgroundImage: `url(${item.images})` }}
              >
                <div className="flex justify-between">
                  {item.featured && (
                    <button className="px-3 py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[13px] font-semibold">
                      Featured
                    </button>
                  )}
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                      {item.status}
                    </button>
                    <button className="px-3 py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                      {item.type}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2 text-white">
                    <FaMapMarkerAlt className="text-lg" />
                    <span className="text-sm">{item.address}</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <FaVideo className="text-lg cursor-pointer hover:text-green-400 transition-colors" />
                    <FaCamera className="text-lg cursor-pointer hover:text-green-400 transition-colors" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h1 className="text-xl font-semibold">{item.name}</h1>
                  <div className="flex items-center gap-1">
                    {renderStars(item.rating)}
                    <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
                      ({item.rating})
                    </span>
                  </div>
                </div>
                
                <h1 className="text-2xl text-green-600 font-bold">{item.price}</h1>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.about}</p>

                <div className="flex gap-4 mt-3">
                  <div className="flex items-center gap-2">
                    <FaBath className="text-green-500 text-lg" />
                    <span className="text-sm">{item.bath} Bath</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBed className="text-green-500 text-lg" />
                    <span className="text-sm">{item.bed} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdSpaceDashboard className="text-green-500 text-lg" />
                    <span className="text-sm">{item.area}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.amenities.slice(0, 3).map((amenity, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
                      {amenity}
                    </span>
                  ))}
                  {item.amenities.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
                      +{item.amenities.length - 3} more
                    </span>
                  )}
                </div>

                <div className="w-full h-[1px] bg-gray-200 my-4"></div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-green-500 text-lg" />
                    <span className="text-sm">{item.owner}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <FaEye className="text-green-500" />
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
                    View Details
                  </button>
                  <div className="flex gap-2">
                    <div className="p-2 border-2 border-gray-200 rounded-full hover:bg-gray-200 cursor-pointer transition hover:scale-110">
                      <FaShareAlt className="text-green-500" />
                    </div>
                    <div className="p-2 border-2 border-gray-200 rounded-full hover:bg-gray-200 cursor-pointer transition hover:scale-110">
                      <FaHeart className="text-green-500" />
                    </div>
                    <div className="p-2 border-2 border-gray-200 rounded-full hover:bg-gray-200 cursor-pointer transition hover:scale-110">
                      <FaPlus className="text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-10">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Load More Properties
            </button>
          </div>
        )}

        {/* No Results Message */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400 text-lg mb-4">
              No properties found matching your criteria
            </div>
            <button
              onClick={clearAllFilters}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Properties;
