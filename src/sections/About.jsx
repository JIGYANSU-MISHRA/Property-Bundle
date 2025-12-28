import React from "react";
import { useDarkMode } from "../components/DarkModeContext";
import aboutimg from "../assets/images/about.jpg";
import { CheckCircle, ArrowRight, Users, Home, Award, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const companyStats = [
    {
      icon: Users,
      number: "25+",
      label: "Happy Clients",
      description: "Satisfied customers in Bhubaneswar",
    },
    {
      icon: Home,
      number: "35+",
      label: "Properties Sold",
      description: "Successfully closed deals",
    },
    {
      icon: Award,
      number: "3+",
      label: "Years Experience",
      description: "Industry expertise and trust",
    },
    {
      icon: Handshake,
      number: "95%",
      label: "Success Rate",
      description: "Customer satisfaction rate",
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
      } w-full m-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 py-10 sm:py-12 md:py-14 grid lg:grid-cols-2 grid-cols-1 items-center gap-8 sm:gap-10 md:gap-12`}
    >
      {/* Image Section */}
      <div className="relative flex justify-center w-full">
        <img
          src={aboutimg}
          alt="About Us"
          className="rounded-2xl w-full max-w-full sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto max-h-[450px] sm:max-h-[500px] md:max-h-[450px] lg:max-h-[500px] xl:max-h-[550px] object-fit shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-start gap-6">
        <h1
          className="text-green-500 font-bold tracking-widest text-xs sm:text-sm md:text-base"
        >
          ABOUT US
        </h1>

        <h1
          className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold leading-snug"
        >
          Your Trusted Partner in Real Estate
        </h1>

        <p
          className="text-sm sm:text-base md:text-base lg:text-lg text-gray-600 dark:text-gray-300 text-justify"
        >
          At <span className="font-semibold">Property Bundle</span>, we are
          dedicated to helping you find the perfect property. With years of
          experience, we specialize in residential, commercial, and investment
          properties across Bhubaneswar.
        </p>

        <p
          className="text-sm sm:text-base md:text-base lg:text-lg text-gray-600 dark:text-gray-300 text-justify"
        >
          Whether you're buying, selling, or renting, we guide you every step of
          the way with transparency, innovation, and expertise.
        </p>



        {/* Features */}
        <div className="w-full">
          <h3 className="font-semibold text-lg mb-3">
            Why Choose Property Bundle?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="text-green-600 text-sm" />
                <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/about-us")}
          className="bg-lime-600 dark:bg-lime-700 hover:bg-lime-700 dark:hover:bg-lime-500 px-6 py-3 text-white font-semibold rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-md"
        >
          View More
          <ArrowRight className="text-sm" />
        </button>
      </div>

      {/* Stats */}
      <div className="lg:col-span-2 mt-10 sm:mt-12 md:mt-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {companyStats.map((stat, index) => (
            <div
              key={index}
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