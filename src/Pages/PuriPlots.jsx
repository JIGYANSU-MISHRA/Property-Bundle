import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/prop8.jpg'; // Using an existing Puri image

const PuriPlots = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-[500px] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
           <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
            PREMIUM PLOTS
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
             Residential Plots in <br/>
             <span className="text-green-400">Puri Konark Marine Drive</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Build your dream holiday home on the scenic Marine Drive. 
            Exclusive plots with ocean breeze and world-class amenities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
               <Phone size={20} />
               Contact Us
             </button>
             <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
               Download Brochure
             </button>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
                
                <div className="lg:w-2/3">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Project Overview</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                        Experience the serenity of coastal living with our premium residential plots located 
                        strategically on the Puri-Konark Marine Drive. This exclusive gated community offers 
                        the perfect blend of luxury, nature, and connectivity. Whether you are looking for a 
                        vacation home or a high-return investment, this is the perfect destination.
                    </p>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        {[
                            "Direct access to Marine Drive",
                            "5 mins from Jagannath Temple",
                            "Gated Community with 24/7 Security",
                            "Underground Electricity & Drainage",
                            "Landscaped Gardens & Parks",
                            "Clubhouse with Swimming Pool"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/3 w-full">
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 sticky top-24">
                        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Plot Details</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Starting from</p>
                        
                        <div className="text-4xl font-bold text-green-600 mb-6">₹ 12.5 Lakhs <span className="text-sm text-gray-500 font-normal">/ onwards</span></div>
                        
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                                <span className="text-gray-600 dark:text-gray-400">Plot Sizes</span>
                                <span className="font-semibold dark:text-white">1200 - 2400 sq.ft</span>
                            </div>
                             <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                                <span className="text-gray-600 dark:text-gray-400">Location</span>
                                <span className="font-semibold dark:text-white">Marine Drive, Puri</span>
                            </div>
                             <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                                <span className="text-gray-600 dark:text-gray-400">Status</span>
                                <span className="font-semibold text-green-600">New Launch</span>
                            </div>
                        </div>

                        <button className="w-full bg-green-600 text-white py-4 rounded-lg font-bold hover:bg-green-700 transition mb-4 shadow-lg shadow-green-200 dark:shadow-none">
                            Enquire Now
                        </button>
                         <p className="text-center text-xs text-gray-500">
                            *Prices subject to change. T&C apply.
                        </p>
                    </div>
                </div>

            </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default PuriPlots;
