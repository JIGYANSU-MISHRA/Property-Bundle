import React, { useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import aboutImgBottom from "../assets/images/about2.webp";
import aboutImg3 from "../assets/images/about3.webp";
import aboutImg4 from "../assets/images/about4.webp";
import person1 from "../assets/images/Person1.webp";
import person2 from "../assets/images/Person2.webp";
import person3 from "../assets/images/Person3.webp";
import person4 from "../assets/images/Person4.webp";
import { Users, Home, Award, Handshake, CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [visionTab, setVisionTab] = useState("vision");
  const { darkMode } = useDarkMode();

  const companyStats = [
    {
      icon: Home, // Using Home as placeholder for Properties Listed, though icon isn't shown in ref image stats, we keep structure simple or hide icons if strictly text. Ref image has simple text stats. I'll hide icons in rendering.
      number: "10K+",
      label: "Properties Listed",
      description: "Range of properties",
    },
    {
      icon: Users,
      number: "5K+",
      label: "Happy Clients Served",
      description: "Satisfied customers",
    },
    {
      icon: Award,
      number: "100+",
      label: "Professional Agents",
      description: "Expert team",
    },
    {
      icon: Handshake,
      number: "95%",
      label: "Satisfaction Rate",
      description: "Customer happiness",
    },
    {
      icon: Award,
      number: "20+",
      label: "Awards Won",
      description: "Industry recognition",
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
    "Comprehensive legal documentation support",
    "Professional photography and virtual tours",
    "24/7 customer support and guidance",
    "Market analysis and investment advice",
    "End-to-end transaction management",
  ];

  const coreValues = [
    {
      title: "Integrity",
      description: "We uphold honesty and transparency in every transaction.",
    },
    {
      title: "Innovation",
      description: "Leveraging technology to redefine real estate experiences.",
    },
    {
      title: "Customer-Centric",
      description: "Your needs are at the heart of everything we do.",
    },
    {
      title: "Excellence",
      description: "Committed to providing the highest standards of service.",
    },
    {
      title: "Sustainability",
      description: "Promoting eco-friendly practices within the real estate industry.",
    },
  ];

  const teamMembers = [
    {
      name: "Amber Cullen",
      position: "CEO & Founder",
      image: person1,
    },
    {
      name: "Bernard Willow",
      position: "Head of Marketing",
      image: person2,
    },
    {
      name: "Christine Nester",
      position: "Operations Manager",
      image: person3,
    },
    {
      name: "David McKinsky",
      position: "Lead Agent",
      image: person4,
    },
  ];

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
      <Header />
      
      <div className="pt-24 pb-5"> {/* Padding for Fixed Header, removed bottom padding */}
        <section
          className={`${
            darkMode ? "dark text-white" : "light text-black"
          } w-full m-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 pt-10 pb-0`}
        >
            {/* Centered Content Section */}
            <div className="flex flex-col justify-center items-center text-center gap-6 mb-12 max-w-4xl mx-auto">
                <h1 className="text-green-500 font-bold tracking-widest text-sm sm:text-base md:text-lg uppercase">
                ABOUT US
                </h1>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
                Your Trusted Partner in Real Estate
                </h1>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At <span className="font-semibold">Property Bundle</span>, we believe in turning possibilities into reality. With a robust presence in Bhubaneswar and Kolkata, we specialize in delivering exceptional value across residential, commercial, and investment landscapes.
                </p>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Whether you are buying, selling, or investing, we stand by you with unwavering transparency, modern innovation, and industry-leading expertise to guide every step of your journey.
                </p>
            </div>

            {/* Bottom Image */}
            <div className="w-full max-w-6xl mx-auto mb-16">
                <img
                src={aboutImgBottom}
                alt="Modern Real Estate"
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl"
                />
            </div>

            {/* Shaping the Future Section */}
            <div className="w-full max-w-6xl mx-auto mb-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white leading-tight max-w-md">
                        Shaping the Future of Real Estate With Innovation
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-md leading-relaxed">
                        We are redefining real estate with innovation and excellence. By leveraging technology and market expertise, we make buying, selling, and renting seamless.
                    </p>
                </div>

                {/* Horizontal Divider */}
                <hr className="border-gray-300 dark:border-gray-700 mb-12" />

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
                    {companyStats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                             <h3 className="text-4xl font-bold text-green-600 dark:text-green-500">
                                {stat.number}
                             </h3>
                             <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                                {stat.label}
                             </p>
                        </div>
                    ))}
                </div>
            </div>


      
        </section>
      </div>

            {/* Vision & Mission Section - Full Width */}
            <div className="w-full mb-16 relative h-[500px]">
                {/* Background Image */}
                <img 
                    src={aboutImg3} 
                    alt="Vision and Mission" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay Container */}
                <div className="absolute inset-0 flex items-center justify-center md:justify-end p-6 md:p-12">
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 md:mr-40 animate-fade-in-up">
                        {/* Tabs */}
                        <div className="flex gap-4 mb-6">
                            <button
                                onClick={() => setVisionTab("vision")}
                                className={`group px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 overflow-hidden ${
                                    visionTab === "vision"
                                    ? "bg-green-600 text-white border border-green-600"
                                    : "bg-transparent text-gray-500 border border-gray-300 hover:border-green-600"
                                }`}
                            >
                                <span className="relative block overflow-hidden">
                                     <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                                        Our Vision
                                     </span>
                                     <span className="absolute top-0 left-0 block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-full group-hover:translate-y-0">
                                        Our Vision
                                     </span>
                                </span>
                            </button>
                            <button
                                onClick={() => setVisionTab("mission")}
                                className={`group px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 overflow-hidden ${
                                    visionTab === "mission"
                                    ? "bg-green-600 text-white border border-green-600"
                                    : "bg-transparent text-gray-500 border border-gray-300 hover:border-green-600"
                                }`}
                            >
                                <span className="relative block overflow-hidden">
                                     <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                                        Our Mission
                                     </span>
                                     <span className="absolute top-0 left-0 block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-full group-hover:translate-y-0">
                                        Our Mission
                                     </span>
                                </span>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="mb-8 min-h-[160px]">
                            {visionTab === "vision" ? (
                                <>
                                    <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-4 text-black dark:text-white">
                                        Trusted & Innovative Real Estate Connection
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                                        Finding the perfect home or investment property requires expertise, trust, and innovation. We bridge the gap between your real estate goals and seamless transactions by combining industry knowledge with cutting-edge technology.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-4 text-black dark:text-white">
                                        Empowering Your Real Estate Journey
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                                        Our mission is to empower individuals and families to find their dream spaces. We are committed to transparency, integrity, and putting our clients first in every transaction, ensuring a smooth and rewarding experience.
                                    </p>
                                </>
                            )}
                        </div>

                         {/* Progress Bar Visual (Dynamic 50% sliding) */}
                         <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                            <div 
                                className={`absolute top-0 h-full w-1/2 bg-green-600 rounded-full transition-all duration-500 ease-in-out ${
                                    visionTab === "vision" ? "left-0" : "left-1/2"
                                }`}
                            ></div>
                         </div>
                    </div>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="w-full max-w-6xl mx-auto mb-16 px-4">
                 {/* Heading and Description centered */}
                 <div className="mb-12 text-center max-w-3xl mx-auto">
                     <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
                        Our Core Values
                     </h2>
                     <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                        We are redefining real estate with innovation and excellence. By leveraging technology and market expertise.
                     </p>
                 </div>

                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left: Image */}
                    <div className="w-full lg:w-1/2">
                        <img 
                            src={aboutImg4} 
                            alt="Our Core Values" 
                            className="w-full h-[420px] rounded-3xl object-cover shadow-lg hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        {/* Description moved to top */}
                        
                        <div className="flex flex-col gap-6">
                            {coreValues.map((value, index) => (
                                <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-4 last:border-0 pl-4 border-l-2 border-transparent hover:border-green-600 transition-colors duration-300">
                                    <h3 className="text-lg font-bold text-black dark:text-white mb-1">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Experts Section */}
            <div className="w-full max-w-6xl mx-auto mb-16 px-4">
                 {/* Heading and Description centered */}
                 <div className="mb-12 text-center max-w-3xl mx-auto">
                     <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
                        The experts behind our success
                     </h2>
                     <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                        Committed experts driven by a passion for turning your real estate dreams into reality.
                     </p>
                 </div>

                 {/* Team Grid */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col gap-3 group">
                            <div className="overflow-hidden rounded-2xl">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-bold text-green-600 dark:text-green-500 overflow-hidden">
                                    <span className="relative block overflow-hidden">
                                        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                                            {member.name}
                                        </span>
                                        <span className="absolute top-0 left-0 block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-full group-hover:translate-y-0">
                                            {member.name}
                                        </span>
                                    </span>
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {member.position}
                                </p>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
