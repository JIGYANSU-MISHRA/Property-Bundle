import React, { useEffect, useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaMapMarkerAlt, FaHome, FaRupeeSign, FaTimes, FaFilter } from "react-icons/fa";

const Hero = () => {
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: ""
  });

  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchError, setSearchError] = useState("");

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  const handleSearchChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (searchError) {
      setSearchError("");
    }
  };

  const validateSearch = () => {
    if (!searchData.location.trim()) {
      setSearchError("Please enter a location");
      return false;
    }
    if (!searchData.propertyType) {
      setSearchError("Please select a property type");
      return false;
    }
    if (!searchData.category) {
      setSearchError("Please select a property category");
      return false;
    }
    return true;
  };

  const handleSearch = async () => {
    if (!validateSearch()) {
      return;
    }

    setIsSearching(true);
    setSearchError("");

    try {
      // Simulate API call with search parameters
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock search results based on search criteria
      const mockResults = generateMockResults(searchData);
      setSearchResults(mockResults);
      setShowResults(true);
      
      // Scroll to results
      setTimeout(() => {
        const resultsSection = document.getElementById('search-results');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

    } catch (error) {
      setSearchError("Search failed. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const generateMockResults = (searchParams) => {
    // Mock property data based on search criteria
    const mockProperties = [
      {
        id: 1,
        name: "Luxury Villa in " + searchParams.location,
        price: "₹ 2.5 Cr",
        location: searchParams.location,
        type: searchParams.propertyType,
        category: searchParams.category,
        beds: searchParams.bedrooms || "3",
        baths: searchParams.bathrooms || "2",
        area: "2500 sq ft",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
      },
      {
        id: 2,
        name: "Modern Apartment in " + searchParams.location,
        price: "₹ 1.8 Cr",
        location: searchParams.location,
        type: searchParams.propertyType,
        category: searchParams.category,
        beds: searchParams.bedrooms || "2",
        baths: searchParams.bathrooms || "2",
        area: "1800 sq ft",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
      },
      {
        id: 3,
        name: "Premium Penthouse in " + searchParams.location,
        price: "₹ 4.2 Cr",
        location: searchParams.location,
        type: searchParams.propertyType,
        category: searchParams.category,
        beds: searchParams.bedrooms || "4",
        baths: searchParams.bathrooms || "3",
        area: "3200 sq ft",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
      }
    ];

    return mockProperties;
  };

  const clearSearch = () => {
    setSearchData({
      location: "",
      propertyType: "",
      category: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      bathrooms: ""
    });
    setSearchResults([]);
    setShowResults(false);
    setSearchError("");
  };

  return (
    <>
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
        <section
          id="hero"
          className={`w-full ${darkMode ? 'h-[660px]' : 'h-[600px]'} mt-5 m-auto bg-cover bg-center flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-10 relative`}
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="relative z-10">
            <h1
              data-aos="zoom-in"
              className="text-7xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[80px] leading-[70px]"
            >
              Discover Your Dream Home in India
            </h1>

            <p
              data-aos="zoom-in"
              className="text-white text-xl lg:pr-[500px] pr-0 mt-4"
            >
              Whether you're looking to buy, rent, or invest, we offer a wide range of properties across India. From luxurious apartments to spacious villas, find the perfect home that suits your lifestyle.
            </p>

            {/* Quick Stats */}
            <div className="flex gap-8 mt-8">
              <div className="text-white">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm">Properties</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold">₹5Cr+</div>
                <div className="text-sm">Property Value</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Enhanced form starts from this line */}
      <div
        className={`${
          darkMode ? "dark bg-black" : "light bg-transparent"
        } z-10 relative`}
      >
        <div
          data-aos="zoom-in"
          id="form"
          className={`${
            darkMode ? "dark bg-gray-900/95 backdrop-blur-sm" : "light bg-white/95 backdrop-blur-sm"
          } lg:w-[80%] w-[95%] mx-auto rounded-xl shadow-2xl ${darkMode ? '-mt-24' : '-mt-20'} border border-gray-200 dark:border-gray-700 overflow-hidden relative z-20 transform hover:shadow-3xl transition-shadow duration-300`}
        >
          {/* Error Message */}
          {searchError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-t-xl">
              <div className="flex items-center gap-2">
                <FaTimes className="text-red-500" />
                <span>{searchError}</span>
              </div>
            </div>
          )}

          {/* Basic Search */}
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 p-8">
            {/* Location Input */}
            <div className="w-full">
              <h1 className="text-black font-semibold dark:text-white flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-600" />
                LOCATION
              </h1>
              <input
                type="text"
                placeholder="Enter city, neighborhood, or address"
                value={searchData.location}
                onChange={(e) => handleSearchChange('location', e.target.value)}
                className="bg-white dark:bg-gray-800 p-3 w-full mt-2 border rounded-lg border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-lime-500 outline-none"
              />
            </div>

            {/* Type Dropdown */}
            <div className="w-full">
              <h1 className="text-black font-semibold dark:text-white flex items-center gap-2">
                <FaHome className="text-green-600" />
                TYPE
              </h1>
              <select
                value={searchData.propertyType}
                onChange={(e) => handleSearchChange('propertyType', e.target.value)}
                className="bg-white dark:bg-gray-800 p-3 w-full mt-2 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-lime-500 outline-none"
              >
                <option value="">Select Property Type</option>
                <option value="Rentals">Rentals</option>
                <option value="Sales">Sales</option>
                <option value="Commercial">Commercial</option>
                <option value="Investment">Investment</option>
              </select>
            </div>

            {/* Category Dropdown */}
            <div className="w-full">
              <h1 className="text-black font-semibold dark:text-white">CATEGORY</h1>
              <select
                value={searchData.category}
                onChange={(e) => handleSearchChange('category', e.target.value)}
                className="bg-white dark:bg-gray-800 p-3 w-full mt-2 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-lime-500 outline-none"
              >
                <option value="">Property Category</option>
                <option value="Apartments">Apartments</option>
                <option value="Villas">Villas</option>
                <option value="Plots">Plots</option>
                <option value="Farmhouses">Farmhouses</option>
                <option value="Penthouses">Penthouses</option>
                <option value="Studio">Studio</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-center items-end">
              <button 
                onClick={handleSearch}
                disabled={isSearching}
                className="bg-lime-600 dark:bg-lime-700 hover:bg-lime-700 dark:hover:bg-lime-500 text-lg p-3 w-full text-white font-semibold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    SEARCHING...
                  </>
                ) : (
                  <>
                    <FaSearch />
                    SEARCH PROPERTIES
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Advanced Search Toggle */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <button
              onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
              className="text-green-600 dark:text-green-400 font-semibold hover:text-green-700 transition-colors flex items-center gap-2"
            >
              <FaFilter />
              {showAdvancedSearch ? "Hide" : "Show"} Advanced Search
            </button>
          </div>

          {/* Advanced Search Options */}
          {showAdvancedSearch && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-8 bg-gray-50 dark:bg-gray-800">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {/* Price Range */}
                <div className="w-full">
                  <h1 className="text-black font-semibold dark:text-white flex items-center gap-2">
                    <FaRupeeSign className="text-green-600" />
                    PRICE RANGE
                  </h1>
                  <div className="flex gap-2 mt-2">
                    <input
                      type="number"
                      placeholder="Min Price"
                      value={searchData.minPrice}
                      onChange={(e) => handleSearchChange('minPrice', e.target.value)}
                      className="bg-white dark:bg-gray-800 p-3 w-full border rounded-lg border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-lime-500 outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Max Price"
                      value={searchData.maxPrice}
                      onChange={(e) => handleSearchChange('maxPrice', e.target.value)}
                      className="bg-white dark:bg-gray-800 p-3 w-full border rounded-lg border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-lime-500 outline-none"
                    />
                  </div>
                </div>

                {/* Bedrooms */}
                <div className="w-full">
                  <h1 className="text-black font-semibold dark:text-white">BEDROOMS</h1>
                  <select
                    value={searchData.bedrooms}
                    onChange={(e) => handleSearchChange('bedrooms', e.target.value)}
                    className="bg-white dark:bg-gray-800 p-3 w-full mt-2 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-lime-500 outline-none"
                  >
                    <option value="">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </select>
                </div>

                {/* Bathrooms */}
                <div className="w-full">
                  <h1 className="text-black font-semibold dark:text-white">BATHROOMS</h1>
                  <select
                    value={searchData.bathrooms}
                    onChange={(e) => handleSearchChange('bathrooms', e.target.value)}
                    className="bg-white dark:bg-gray-800 p-3 w-full mt-2 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-lime-500 outline-none"
                  >
                    <option value="">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Search Results */}
      {showResults && (
        <div id="search-results" className="w-full py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Search Results ({searchResults.length} properties found)
              </h2>
              <button
                onClick={clearSearch}
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Clear Search
              </button>
            </div>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {searchResults.map((property) => (
                <div
                  key={property.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${property.image})` }}>
                    <div className="p-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {property.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {property.name}
                    </h3>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3">
                      {property.price}
                    </p>
                    
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <span>{property.beds} Beds</span>
                      <span>{property.baths} Baths</span>
                      <span>{property.area}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {property.location}
                      </span>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;