import React, { useEffect, useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";
import { FaMapMarkerAlt, FaHome, FaRupeeSign, FaArrowRight, FaTimes, FaStar, FaUsers, FaBuilding, FaChartLine } from "react-icons/fa";

const PopularAreas = () => {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalArea, setModalArea] = useState(null);

  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const { darkMode} = useDarkMode();

  const areas = [
    {
      name: "Bandra West, Mumbai",
      image: area1,
      properties: 156,
      avgPrice: "₹ 2.8 Cr",
      description: "Premium residential area with sea views and excellent connectivity",
      features: ["Sea View", "Premium Location", "Excellent Connectivity", "High ROI"],
      propertyTypes: ["Apartments", "Penthouses", "Villas"],
      avgRent: "₹ 1.2 Lakh/month",
      details: {
        population: "2.5 Lakh+",
        avgAge: "32 years",
        crimeRate: "Low",
        schools: "45+",
        hospitals: "12+",
        shoppingMalls: "8+",
        metroStations: "3",
        parks: "15+",
        restaurants: "200+",
        annualAppreciation: "12%",
        rentalYield: "4.5%",
        investmentScore: "9.2/10",
        lifestyleScore: "9.5/10",
        connectivityScore: "9.8/10"
      }
    },
    {
      name: "Indiranagar, Bangalore",
      image: area2,
      properties: 89,
      avgPrice: "₹ 1.9 Cr",
      description: "Tech hub with modern apartments and vibrant lifestyle",
      features: ["Tech Hub", "Modern Infrastructure", "Vibrant Lifestyle", "Good Investment"],
      propertyTypes: ["Apartments", "Duplex", "Villas"],
      avgRent: "₹ 85K/month",
      details: {
        population: "1.8 Lakh+",
        avgAge: "28 years",
        crimeRate: "Very Low",
        schools: "32+",
        hospitals: "8+",
        shoppingMalls: "6+",
        metroStations: "2",
        parks: "12+",
        restaurants: "150+",
        annualAppreciation: "15%",
        rentalYield: "5.2%",
        investmentScore: "9.4/10",
        lifestyleScore: "9.3/10",
        connectivityScore: "9.6/10"
      }
    },
    {
      name: "Connaught Place, Delhi",
      image: area3,
      properties: 234,
      avgPrice: "₹ 1.5 Cr",
      description: "Historic area with mix of traditional and modern properties",
      features: ["Historic Location", "Commercial Hub", "Good Connectivity", "Mixed Properties"],
      propertyTypes: ["Apartments", "Commercial", "Heritage"],
      avgRent: "₹ 95K/month",
      details: {
        population: "3.2 Lakh+",
        avgAge: "35 years",
        crimeRate: "Medium",
        schools: "55+",
        hospitals: "15+",
        shoppingMalls: "12+",
        metroStations: "4",
        parks: "20+",
        restaurants: "300+",
        annualAppreciation: "10%",
        rentalYield: "6.8%",
        investmentScore: "8.9/10",
        lifestyleScore: "9.1/10",
        connectivityScore: "9.7/10"
      }
    }
  ];

  const statistics = [
    {
      number: "50+",
      label: "ACTIVE LISTINGS",
      description: "Properties available in Bhubaneswar",
      icon: FaHome
    },
    {
      number: "25+",
      label: "SATISFIED CLIENTS",
      description: "Happy customers who found their homes",
      icon: FaMapMarkerAlt
    },
    {
      number: "35+",
      label: "TOTAL TRANSACTIONS",
      description: "Successful property deals completed",
      icon: FaRupeeSign
    },
    {
      number: "₹5Cr+",
      label: "PROPERTY VALUE",
      description: "Total value of properties sold",
      icon: FaHome
    }
  ];

  const handleExploreArea = (area) => {
    setModalArea(area);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalArea(null);
  };

  const renderStars = (scoreOutOfTen) => {
    const numeric = typeof scoreOutOfTen === 'number'
      ? scoreOutOfTen
      : parseFloat(String(scoreOutOfTen).split('/')[0]);
    const stars = Math.round(Math.max(0, Math.min(5, (numeric / 10) * 5)));
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar 
        key={i} 
        className={i < stars ? "text-yellow-500" : "text-gray-300"} 
        size={16} 
      />
    ));
  };

  return (
    <>
      <div
        className={`${
          darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
        } py-20`}
      >
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1
              data-aos="fade-up"
              className="text-green-500 font-semibold tracking-widest"
            >
              POPULAR AREAS
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-3xl lg:text-5xl font-bold mt-4 leading-snug"
            >
              Explore Most Popular Areas
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
            >
              Discover the most sought-after locations with excellent investment potential and lifestyle amenities.
            </p>
          </div>

          {/* Interactive Area Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {areas.map((area, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={200 * (index + 1)}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredArea(index)}
                onMouseLeave={() => setHoveredArea(null)}
                onClick={() => setSelectedArea(selectedArea === index ? null : index)}
              >
                                 <div className="h-96 bg-cover bg-center rounded-xl shadow-lg transform transition duration-300 hover:scale-105 relative overflow-hidden"
                   style={{ backgroundImage: `url(${area.image})` }}
                 >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{area.name}</h3>
                    <p className="text-sm text-gray-200 mb-3">{area.description}</p>
                    
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <FaHome className="text-green-400" />
                        <span className="text-sm">{area.properties} properties</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaRupeeSign className="text-green-400" />
                        <span className="text-sm">{area.avgPrice}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {area.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-green-600/80 text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Hover Effect */}
                    {hoveredArea === index && (
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-300">
                        <div className="text-center">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleExploreArea(area);
                            }}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                          >
                            Explore Area
                            <FaArrowRight className="text-sm" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedArea === index && (
                  <div className="mt-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Area Details</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">Property Types:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {area.propertyTypes.map((type, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded">
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">Average Rent:</span>
                        <p className="font-medium">{area.avgRent}</p>
                      </div>
                      
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">Key Features:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {area.features.map((feature, idx) => (
                            <span key={idx} className="px-2 py-1 bg-green-100 dark:bg-green-900 text-xs rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced Statistics Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {statistics.map((stat, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={200 * (index + 1)}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="p-4 rounded-full bg-green-100 dark:bg-green-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-green-600 dark:text-green-400 text-2xl" />
                </div>
                <h1 className="text-4xl font-extrabold text-green-600 dark:text-green-400 mb-2">
                  {stat.number}
                </h1>
                <p className="text-lg font-semibold text-center mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Market Insights */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6 text-center">
              Market Insights
            </h3>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Average Annual Appreciation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">8.5%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Average Rental Yield</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">92%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Customer Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Area Details Modal */}
      {showModal && modalArea && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <div 
                className="h-64 bg-cover bg-center rounded-t-xl"
                style={{ backgroundImage: `url(${modalArea.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-t-xl"></div>
                <div className="absolute top-4 right-4">
                  <button
                    onClick={closeModal}
                    className="bg-white dark:bg-gray-800 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <FaTimes className="text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-3xl font-bold mb-2">{modalArea.name}</h2>
                  <p className="text-lg">{modalArea.description}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{modalArea.properties}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Properties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{modalArea.avgPrice}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Avg Price</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{modalArea.avgRent}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Avg Rent</div>
                </div>
              </div>

              {/* Investment Scores */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaChartLine className="text-green-600" />
                    <h3 className="font-semibold">Investment Score</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(modalArea.details.investmentScore)}
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">
                      {modalArea.details.investmentScore}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Excellent investment potential with high returns
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaUsers className="text-green-600" />
                    <h3 className="font-semibold">Lifestyle Score</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(modalArea.details.lifestyleScore)}
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">
                      {modalArea.details.lifestyleScore}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Great amenities and quality of life
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaBuilding className="text-green-600" />
                    <h3 className="font-semibold">Connectivity Score</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(modalArea.details.connectivityScore)}
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">
                      {modalArea.details.connectivityScore}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Excellent transport and infrastructure
                  </p>
                </div>
              </div>

              {/* Area Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Area Demographics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Population:</span>
                      <span className="font-semibold">{modalArea.details.population}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Average Age:</span>
                      <span className="font-semibold">{modalArea.details.avgAge}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Crime Rate:</span>
                      <span className="font-semibold">{modalArea.details.crimeRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Annual Appreciation:</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">{modalArea.details.annualAppreciation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Rental Yield:</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">{modalArea.details.rentalYield}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Amenities</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Schools:</span>
                      <span className="font-semibold">{modalArea.details.schools}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Hospitals:</span>
                      <span className="font-semibold">{modalArea.details.hospitals}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Shopping Malls:</span>
                      <span className="font-semibold">{modalArea.details.shoppingMalls}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Metro Stations:</span>
                      <span className="font-semibold">{modalArea.details.metroStations}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Parks:</span>
                      <span className="font-semibold">{modalArea.details.parks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Restaurants:</span>
                      <span className="font-semibold">{modalArea.details.restaurants}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Types */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Available Property Types</h3>
                <div className="flex flex-wrap gap-2">
                  {modalArea.propertyTypes.map((type, index) => (
                    <span key={index} className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg font-medium">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  View Properties
                </button>
                <button className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-3 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold">
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopularAreas;
