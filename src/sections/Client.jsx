import React, { useState } from "react";
import { client } from "../components/export";
import { useDarkMode } from "../components/DarkModeContext";
import { FaStar, FaMapMarkerAlt, FaHome, FaQuoteLeft } from "react-icons/fa";

const Client = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [filter, setFilter] = useState("all");

  const { darkMode } = useDarkMode();

  const filteredClients = filter === "all" 
    ? client 
    : client.filter(c => c.rating === parseInt(filter));

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar 
        key={i} 
        className={i < rating ? "text-yellow-500" : "text-gray-300"} 
        size={14} 
      />
    ));
  };

  return (
    <div
      className={`${
        darkMode
          ? "dark bg-gray-900 text-white"
          : "light bg-gray-100 text-black"
      } transition-all duration-500`}
    >
      <section
        id="testimonials"
        className="w-full mx-auto flex flex-col items-start lg:px-8 xl:px-16 px-4 sm:px-6 py-8 sm:py-12 lg:py-16 gap-8 sm:gap-12 lg:gap-16"
      >
        {/* Heading */}
        <div className="text-center w-full">
          <h1
            className="text-green-500 dark:text-green-400 font-medium text-sm sm:text-base"
          >
            OUR CLIENTS
          </h1>
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-2"
          >
            Reviews From Clients
          </h1>
          <p
            className="text-gray-600 dark:text-gray-300 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4"
          >
            Hear from our satisfied clients who found their dream homes with our expert guidance and personalized service.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="w-full flex justify-center">
          <div className="flex gap-1 sm:gap-2 bg-white dark:bg-gray-800 p-1 sm:p-2 rounded-lg shadow-md">
            {[
              { label: "All", value: "all" },
              { label: "5 Stars", value: "5" },
              { label: "4 Stars", value: "4" }
            ].map((filterOption) => (
              <button
                key={filterOption.value}
                onClick={() => setFilter(filterOption.value)}
                className={`px-3 py-2 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  filter === filterOption.value
                    ? "bg-green-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>

        {/* Client Reviews */}
        <div
          id="clients-box"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full"
        >
          {filteredClients.map((item, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 lg:p-8 flex flex-col items-center gap-4 sm:gap-6 rounded-lg sm:rounded-xl w-full transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl cursor-pointer
              ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-green-50 shadow-sm sm:shadow-md"
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              {/* Quote Icon */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-green-600 opacity-20">
                <FaQuoteLeft size={18} className="sm:size-6" />
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3 sm:gap-4 w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-green-500 flex-shrink-0"
                />
                <div className="flex flex-col flex-1 min-w-0">
                  <h1 className="text-base sm:text-lg font-semibold truncate">{item.name}</h1>
                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                    <FaMapMarkerAlt className="text-green-600 flex-shrink-0" size={12} />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                    <FaHome className="text-green-600 flex-shrink-0" size={12} />
                    <span className="truncate">{item.property}</span>
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 w-full justify-start items-center">
                {renderStars(item.rating)}
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 ml-2">
                  {item.rating}.0/5.0
                </span>
              </div>

              {/* Client Feedback */}
              <p className="text-sm sm:text-md text-justify text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">
                {item.feedback}
              </p>

              {/* Quick Stats */}
              <div className="w-full grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400">
                    {item.rating}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Rating
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400 truncate">
                    {item.location.split(',')[0]}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Location
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Statistics */}
        <div className="w-full mt-8 sm:mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400">
                {client.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                Total Reviews
              </div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400">
                {(client.reduce((acc, c) => acc + c.rating, 0) / client.length).toFixed(1)}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                Average Rating
              </div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400">
                {client.filter(c => c.rating === 5).length}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                5-Star Reviews
              </div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400">
                98%
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full text-center mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Ready to Find Your Dream Home?
            </h3>
            <p className="text-green-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Join thousands of satisfied clients who have found their perfect property with our expert guidance and personalized service.
            </p>
            <button className="bg-white text-green-600 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors text-sm sm:text-base">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Client;