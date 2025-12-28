import React, { useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";
import { MapPin, Home, IndianRupee, ArrowRight, X, Star, Users, Building2, TrendingUp } from "lucide-react";

const PopularAreas = () => {
  const [hoveredArea, setHoveredArea] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [modalArea, setModalArea] = useState(null);

  const { darkMode} = useDarkMode();

  const areas = [
    {
      name: "Salt Lake, Kolkata",
      image: area1,
      properties: 124,
      avgPrice: "₹ 1.5 Cr",
      description: "Planned satellite township with lush greenery and major IT hubs",
      features: ["IT Hub", "Planned Infra", "Green City", "Metro Connectivity"],
      propertyTypes: ["Apartments", "Independent Houses", "Office Spaces"],
      avgRent: "₹ 45K/month",
      details: {
        population: "2.2 Lakh+",
        avgAge: "38 years",
        crimeRate: "Low",
        schools: "25+",
        hospitals: "10+",
        shoppingMalls: "5+",
        metroStations: "6",
        parks: "40+",
        restaurants: "120+",
        annualAppreciation: "8%",
        rentalYield: "3.5%",
        investmentScore: "8.8/10",
        lifestyleScore: "9.2/10",
        connectivityScore: "9.5/10"
      }
    },
    {
      name: "Sea Beach Road, Puri",
      image: area2,
      properties: 65,
      avgPrice: "₹ 1.1 Cr",
      description: "Prime district offering breathtaking sea views and proximity to Jagannath Temple",
      features: ["Sea View", "Tourism Hub", "Spiritual", "Vacation Homes"],
      propertyTypes: ["Apartments", "Resorts", "Holiday Homes"],
      avgRent: "₹ 35K/month",
      details: {
        population: "1.5 Lakh+",
        avgAge: "40 years",
        crimeRate: "Low",
        schools: "15+",
        hospitals: "5+",
        shoppingMalls: "3+",
        metroStations: "0",
        parks: "8+",
        restaurants: "80+",
        annualAppreciation: "10%",
        rentalYield: "5.5%",
        investmentScore: "8.5/10",
        lifestyleScore: "9.0/10",
        connectivityScore: "7.5/10"
      }
    },
    {
      name: "Patia, Bhubaneswar",
      image: area3,
      properties: 210,
      avgPrice: "₹ 1.2 Cr",
      description: "Rapidly developing education and IT corridor with modern infrastructure",
      features: ["Education Hub", "IT Zone", "Smart City", "High Growth"],
      propertyTypes: ["High-rise Apts", "Duplexes", "Commercial"],
      avgRent: "₹ 28K/month",
      details: {
        population: "3.0 Lakh+",
        avgAge: "29 years",
        crimeRate: "Low",
        schools: "35+",
        hospitals: "18+",
        shoppingMalls: "7+",
        metroStations: "0",
        parks: "25+",
        restaurants: "150+",
        annualAppreciation: "14%",
        rentalYield: "4.8%",
        investmentScore: "9.3/10",
        lifestyleScore: "8.9/10",
        connectivityScore: "9.0/10"
      }
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
      <Star 
        key={i} 
        className={`${i < stars ? "text-yellow-500" : "text-gray-300"} w-3 h-3 sm:w-4 sm:h-4`}
      />
    ));
  };

  return (
    <>
      <div
        className={`${
          darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
        } py-12 sm:py-16 lg:py-20`}
      >
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h1
              className="text-green-500 font-semibold tracking-widest text-xs sm:text-sm md:text-base"
            >
              POPULAR AREAS
            </h1>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 leading-tight sm:leading-snug px-2"
            >
              Explore Most Popular Areas
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-3 sm:mt-4 max-w-2xl mx-auto px-2"
            >
              Discover the most sought-after locations with excellent investment potential and lifestyle amenities.
            </p>
          </div>

          {/* Interactive Area Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
            {areas.map((area, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredArea(index)}
                onMouseLeave={() => setHoveredArea(null)}

              >
                                 <div className="h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 bg-cover bg-center rounded-xl shadow-lg transform transition duration-300 hover:scale-105 relative overflow-hidden"
                   style={{ backgroundImage: `url(${area.image})` }}
                 >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 line-clamp-1">{area.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-200 mb-2 sm:mb-3 line-clamp-2">{area.description}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-2 sm:mb-3">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Home className="text-green-400 text-sm sm:text-base flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{area.properties} properties</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <IndianRupee className="text-green-400 text-sm sm:text-base flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{area.avgPrice}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                      {area.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="px-2 py-0.5 sm:py-1 bg-green-600/80 text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Hover Effect */}
                    {hoveredArea === index && (
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-300">
                        <div className="text-center px-4">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleExploreArea(area);
                            }}
                            className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm sm:text-base"
                          >
                            Explore Area
                            <ArrowRight className="text-xs sm:text-sm" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>


              </div>
            ))}
          </div>



          {/* Market Insights */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 mb-4 sm:mb-6 text-center">
              Market Insights
            </h3>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2">15%</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Average Annual Appreciation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2">8.5%</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Average Rental Yield</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2">92%</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Customer Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Area Details Modal */}
      {showModal && modalArea && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4" onClick={closeModal}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="relative">
              <div 
                className="h-40 sm:h-48 md:h-56 lg:h-64 bg-cover bg-center rounded-t-xl"
                style={{ backgroundImage: `url(${modalArea.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-t-xl"></div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <button
                    onClick={closeModal}
                    className="bg-white dark:bg-gray-800 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="text-gray-600 dark:text-gray-300 text-sm sm:text-base" />
                  </button>
                </div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{modalArea.name}</h2>
                  <p className="text-sm sm:text-base md:text-lg">{modalArea.description}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 md:p-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">{modalArea.properties}</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Properties</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 break-words">{modalArea.avgPrice}</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Avg Price</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 break-words">{modalArea.avgRent}</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Avg Rent</div>
                </div>
              </div>

              {/* Investment Scores */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-green-600 text-sm sm:text-base flex-shrink-0" />
                    <h3 className="font-semibold text-sm sm:text-base">Investment Score</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {renderStars(modalArea.details.investmentScore)}
                    <span className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400">
                      {modalArea.details.investmentScore}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Excellent investment potential with high returns
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="text-green-600 text-sm sm:text-base flex-shrink-0" />
                    <h3 className="font-semibold text-sm sm:text-base">Lifestyle Score</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {renderStars(modalArea.details.lifestyleScore)}
                    <span className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400">
                      {modalArea.details.lifestyleScore}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Great amenities and quality of life
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-lg sm:col-span-2 md:col-span-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="text-green-600 text-sm sm:text-base flex-shrink-0" />
                    <h3 className="font-semibold text-sm sm:text-base">Connectivity Score</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {renderStars(modalArea.details.connectivityScore)}
                    <span className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400">
                      {modalArea.details.connectivityScore}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Excellent transport and infrastructure
                  </p>
                </div>
              </div>

              {/* Area Details */}
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">Area Demographics</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Population:</span>
                      <span className="font-semibold text-xs sm:text-sm">{modalArea.details.population}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Average Age:</span>
                      <span className="font-semibold text-xs sm:text-sm">{modalArea.details.avgAge}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Crime Rate:</span>
                      <span className="font-semibold text-xs sm:text-sm">{modalArea.details.crimeRate}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Annual Appreciation:</span>
                      <span className="font-semibold text-xs sm:text-sm text-green-600 dark:text-green-400">{modalArea.details.annualAppreciation}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Rental Yield:</span>
                      <span className="font-semibold text-xs sm:text-sm text-green-600 dark:text-green-400">{modalArea.details.rentalYield}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">Amenities</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Schools:</span>
                      <span className="font-semibold text-xs sm:text-sm">{modalArea.details.schools}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Hospitals:</span>
                      <span className="font-semibold text-xs sm:text-sm">{modalArea.details.hospitals}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Shopping Malls:</span>
                      <span className="font-semibold text-xs sm:text-sm">{modalArea.details.shoppingMalls}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Metro Stations:</span>
                      <span className="font-semibold text-xs sm:text-sm">{modalArea.details.metroStations}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Parks:</span>
                      <span className="font-semibold text-xs sm:text-sm">{modalArea.details.parks}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Restaurants:</span>
                      <span className="font-semibold text-xs sm:text-sm">{modalArea.details.restaurants}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Types */}
              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">Available Property Types</h3>
                <div className="flex flex-wrap gap-2">
                  {modalArea.propertyTypes.map((type, index) => (
                    <span key={index} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg font-medium text-xs sm:text-sm">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                <button className="flex-1 bg-green-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm sm:text-base">
                  View Properties
                </button>
                <button className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold text-sm sm:text-base">
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
