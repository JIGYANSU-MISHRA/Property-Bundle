import React, { useEffect, useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutimg from "../assets/images/about.jpg";
import {
  FaUsers,
  FaHome,
  FaAward,
  FaHandshake,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  const companyStats = [
    {
      icon: FaUsers,
      number: "25+",
      label: "Happy Clients",
      description: "Satisfied customers in Bhubaneswar",
    },
    {
      icon: FaHome,
      number: "35+",
      label: "Properties Sold",
      description: "Successfully closed deals",
    },
    {
      icon: FaAward,
      number: "3+",
      label: "Years Experience",
      description: "Industry expertise and trust",
    },
    {
      icon: FaHandshake,
      number: "95%",
      label: "Success Rate",
      description: "Customer satisfaction rate",
    },
  ];

  const tabs = [
    {
      id: "mission",
      title: "Our Mission",
      content:
        "To provide exceptional real estate services that help individuals and families find their perfect homes while ensuring transparency, trust, and value in every transaction.",
    },
    {
      id: "vision",
      title: "Our Vision",
      content:
        "To become the most trusted and preferred real estate partner in India, known for our integrity, innovation, and commitment to customer satisfaction.",
    },
    {
      id: "values",
      title: "Our Values",
      content:
        "Integrity, transparency, customer-first approach, innovation, and excellence in everything we do.",
    },
  ];

  const features = [
    "Expert property evaluation and pricing",
    "Comprehensive legal documentation support",
    "Professional photography and virtual tours",
    "24/7 customer support and guidance",
    "Market analysis and investment advice",
    "End-to-end transaction management",
  ];

  return (
    <section
      id="about"
      className={`${
        darkMode ? "dark bg-black text-white" : "light bg-transparent text-black"
      } w-full m-auto lg:px-40 md:px-20 px-6 py-14 grid lg:grid-cols-2 grid-cols-1 items-center gap-12`}
    >
      {/* Image Section */}
      <div data-aos="zoom-in" className="relative flex justify-center">
        <img
          src={aboutimg}
          alt="About Us"
          className="rounded-2xl w-full max-w-[500px] h-auto object-cover shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-start gap-6">
        <h1
          data-aos="fade-up"
          className="text-green-500 font-bold tracking-widest text-sm md:text-base"
        >
          ABOUT US
        </h1>

        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-3xl md:text-4xl font-semibold leading-snug"
        >
          Your Trusted Partner in Real Estate
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-justify"
        >
          At <span className="font-semibold">Property Bundle</span>, we are
          dedicated to helping you find the perfect property. With years of
          experience, we specialize in residential, commercial, and investment
          properties across Bhubaneswar.
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-justify"
        >
          Whether you're buying, selling, or renting, we guide you every step of
          the way with transparency, innovation, and expertise.
        </p>

        {/* Tabs */}
        <div data-aos="fade-up" data-aos-delay="600" className="w-full">
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm md:text-base whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </p>
          </div>
        </div>

        {/* Features */}
        <div data-aos="fade-up" data-aos-delay="700" className="w-full">
          <h3 className="font-semibold text-lg mb-3">
            Why Choose Property Bundle?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          data-aos="fade-up"
          data-aos-delay="800"
          className="bg-lime-600 dark:bg-lime-700 hover:bg-lime-700 dark:hover:bg-lime-500 px-6 py-3 text-white font-semibold rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-md"
        >
          LEARN MORE
          <FaArrowRight className="text-sm" />
        </button>
      </div>

      {/* Stats */}
      <div className="lg:col-span-2 mt-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companyStats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="p-4 rounded-full bg-green-100 dark:bg-green-900 mx-auto mb-4 w-fit transition-transform">
                <stat.icon className="text-green-600 dark:text-green-400 text-2xl" />
              </div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {stat.label}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;