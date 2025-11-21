import React, { useEffect, useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutimg from "../assets/images/about.jpg";
import { FaUsers, FaHome, FaAward, FaHandshake, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

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
      description: "Satisfied customers in Bhubaneswar"
    },
    {
      icon: FaHome,
      number: "35+",
      label: "Properties Sold",
      description: "Successfully closed deals"
    },
    {
      icon: FaAward,
      number: "3+",
      label: "Years Experience",
      description: "Industry expertise and trust"
    },
    {
      icon: FaHandshake,
      number: "95%",
      label: "Success Rate",
      description: "Customer satisfaction rate"
    }
  ];

  const tabs = [
    {
      id: 'mission',
      title: 'Our Mission',
      content: 'To provide exceptional real estate services that help individuals and families find their perfect homes while ensuring transparency, trust, and value in every transaction.'
    },
    {
      id: 'vision',
      title: 'Our Vision',
      content: 'To become the most trusted and preferred real estate partner in India, known for our integrity, innovation, and commitment to customer satisfaction.'
    },
    {
      id: 'values',
      title: 'Our Values',
      content: 'Integrity, transparency, customer-first approach, innovation, and excellence in everything we do.'
    }
  ];

  const features = [
    "Expert property evaluation and pricing",
    "Comprehensive legal documentation support",
    "Professional photography and virtual tours",
    "24/7 customer support and guidance",
    "Market analysis and investment advice",
    "End-to-end transaction management"
  ];

  return (
    <section
      id="about"
      className={`${
        darkMode ? "dark bg-black text-white" : "light bg-transparent text-black"
      } w-full m-auto lg:px-40 px-10 py-10 grid lg:grid-cols-2 grid-cols-1 items-center gap-10 lg:gap-16`}
    >
      {/* Image Section */}
      <div data-aos="zoom-in" className="relative">
        <img
          src={aboutimg}
          alt="About Us"
          className="rounded-2xl w-full lg:w-[500px] lg:h-[600px] object-cover shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-start gap-6">
        <h1 data-aos="fade-up" className="text-green-500 font-bold tracking-widest">
          ABOUT US
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[40px] font-semibold leading-tight"
        >
          Your Trusted Partner in Real Estate
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-lg text-gray-600 dark:text-gray-300 text-justify"
        >
          At <span className="font-semibold">Property Bundle</span>, we are dedicated to helping you find the perfect property that matches your lifestyle and aspirations. With years of experience in the real estate industry, we specialize in residential, commercial, and investment properties in Bhubaneswar and surrounding areas. Our team of experts is committed to providing personalized service, transparent processes, and unmatched expertise to make your property journey seamless and rewarding.
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-lg text-gray-600 dark:text-gray-300 text-justify"
        >
          Whether you're buying, selling, or renting, we are here to guide you every step of the way. Our mission is to turn your real estate dreams into reality by offering innovative solutions, market insights, and a wide range of properties to choose from in Bhubaneswar.
        </p>

        {/* Interactive Tabs */}
        <div data-aos="fade-up" data-aos-delay="600" className="w-full">
          <div className="flex gap-2 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              {tabs.find(tab => tab.id === activeTab)?.content}
            </p>
          </div>
        </div>

        {/* Features List */}
        <div data-aos="fade-up" data-aos-delay="700" className="w-full">
          <h3 className="font-semibold text-lg mb-3">Why Choose Property Bundle?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          data-aos="fade-up"
          data-aos-delay="800"
          className="bg-lime-600 dark:bg-lime-700 hover:bg-lime-700 dark:hover:bg-lime-500 text-base px-4 py-2 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
        >
          LEARN MORE
          <FaArrowRight className="text-sm" />
        </button>
      </div>

      {/* Additional Stats Section */}
      <div className="lg:col-span-2 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companyStats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              <div className="p-4 rounded-full bg-green-100 dark:bg-green-900 mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-green-600 dark:text-green-400 text-2xl" />
              </div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;