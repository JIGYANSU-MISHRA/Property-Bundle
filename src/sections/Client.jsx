import React, { useEffect, useState } from "react";
import { client } from "../components/export";
import { useDarkMode } from "../components/DarkModeContext";
import { FaStar, FaMapMarkerAlt, FaHome, FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Client = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  const filteredClients = filter === "all" 
    ? client 
    : client.filter(c => c.rating === parseInt(filter));

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar 
        key={i} 
        className={i < rating ? "text-yellow-500" : "text-gray-300"} 
        size={16} 
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
        className="lg:w-[90%] w-full mx-auto rounded-xl flex flex-col items-start lg:px-16 px-6 py-16 gap-16"
      >
        {/* Heading */}
        <div className="text-center w-full">
          <h1
            data-aos="zoom-in"
            className="text-green-500 dark:text-green-400 font-medium"
          >
            OUR CLIENTS
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-4xl md:text-4xl font-bold leading-tight mt-2"
          >
            Reviews From Clients
          </h1>
          <p
            data-aos="zoom-in"
            className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Hear from our satisfied clients who found their dream homes with our expert guidance and personalized service.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="w-full flex justify-center">
          <div className="flex gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
            {[
              { label: "All", value: "all" },
              { label: "5 Stars", value: "5" },
              { label: "4 Stars", value: "4" }
            ].map((filterOption) => (
              <button
                key={filterOption.value}
                onClick={() => setFilter(filterOption.value)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
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
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full"
        >
          {filteredClients.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              key={index}
              className={`p-8 flex flex-col items-center gap-6 rounded-xl w-full transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer
              ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-green-50 shadow-md"
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-green-600 opacity-20">
                <FaQuoteLeft size={24} />
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-green-500"
                />
                <div className="flex flex-col flex-1">
                  <h1 className="text-lg font-semibold">{item.name}</h1>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
                    <FaMapMarkerAlt className="text-green-600" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
                    <FaHome className="text-green-600" />
                    <span>{item.property}</span>
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 w-full justify-start">
                {renderStars(item.rating)}
                <span className="text-sm text-gray-500 dark:text-gray-300 ml-2">
                  {item.rating}.0/5.0
                </span>
              </div>

              {/* Client Feedback */}
              <p className="text-md text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.feedback}
              </p>

              {/* Quick Stats */}
              <div className="w-full grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">
                    {item.rating}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Rating
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">
                    {item.location}
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
        <div className="w-full mt-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                {client.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Total Reviews
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                {(client.reduce((acc, c) => acc + c.rating, 0) / client.length).toFixed(1)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Average Rating
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                {client.filter(c => c.rating === 5).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                5-Star Reviews
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                98%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full text-center mt-12">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Find Your Dream Home?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have found their perfect property with our expert guidance and personalized service.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Client;
