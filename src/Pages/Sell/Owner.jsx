import React from 'react';
import { CheckCircle, ArrowRight, Shield, Clock, Users, DollarSign, Star, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Modal from '../../components/Modal';
import OwnerForm from '../../components/Forms/OwnerForm';

const Owner = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <>
      <Header />
      <div className="pt-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-white dark:bg-gray-800 overflow-hidden">
          <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-6">
                  For Property Owners
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                  Sell specific Property <br />
                  <span className="text-green-600">Faster & Better</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                  Post your property in one click and connect with verified buyers. No hassle, just results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg"
                  >
                   Click to Post Your Property for Free
                    <ArrowRight size={20} />
                  </button>
                  <div className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 shadow-sm">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold">JD</div>
                      <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold">AS</div>
                      <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-xs font-bold">MR</div>
                    </div>
                    <div className="text-sm">
                      <p className="font-bold text-gray-900 dark:text-white">1k+ Owners</p>
                      <p className="text-gray-500">Listed this week</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-green-600/5 blur-3xl rounded-full transform rotate-12"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80" 
                  alt="Happy family in new home" 
                  className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[500px]" 
                />
                
                {/* Floating Card */}
                <div className="absolute bottom-10 -left-10 z-20 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-green-100 rounded-full text-green-600">
                      <DollarSign size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Estimated Value</p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">₹ 1.2 Cr</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
                  </div>
                  <p className="text-xs text-green-600 mt-2 font-medium">High Demand</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How it Works</h2>
              <p className="text-gray-600 dark:text-gray-400">Selling your property has never been easier. We've simplified the process to just 3 steps.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
               {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>

              <div className="relative z-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:translate-y-[-5px] transition-transform duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-green-600/30">1</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Add Details</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Enter your property details like location, size, and amenities. It takes less than 5 minutes.</p>
              </div>

              <div className="relative z-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:translate-y-[-5px] transition-transform duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-green-600/30">2</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Get Verified Leads</h3>
                <p className="text-gray-500 text-sm leading-relaxed">We showcase your property to thousands of verified buyers and share genuine leads with you.</p>
              </div>

              <div className="relative z-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:translate-y-[-5px] transition-transform duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-green-600/30">3</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Close Deal</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Connect with buyers, negotiate, and close the deal. Our support team is here to help.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 md:order-1 relative">
                 <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-20 blur-lg"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80" 
                   alt="Discussion" 
                   className="relative rounded-2xl shadow-2xl w-full"
                 />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Sell with Property Bundle?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 shrink-0 h-fit">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Verified Buyers</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">We verify every buyer to ensure you only deal with serious inquiries, saving you time and effort.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 shrink-0 h-fit">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dedicated Relationship Manager</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Get a dedicated expert who will assist you throughout the selling journey, from listing to closing.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 shrink-0 h-fit">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Faster Closure</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Our advanced matching algorithm connects you with the right buyers instantly for quick deals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-green-50 dark:bg-gray-800">
           <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Recently Sold Properties</h2>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   {
                     img: "https://images.unsplash.com/photo-1600596542815-e25fa14c8d93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                     title: "3 BHK Apartment, Indiranagar",
                     price: "₹ 1.8 Cr",
                     time: "Sold in 12 days"
                   },
                   {
                     img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                     title: "4 BHK Villa, Whitefield",
                     price: "₹ 3.5 Cr",
                     time: "Sold in 25 days"
                   },
                   {
                     img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                     title: "2 BHK Flat, Koramangala",
                     price: "₹ 95 L",
                     time: "Sold in 7 days"
                   }
                 ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform">
                       <div className="relative">
                          <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                          <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">{item.time}</div>
                       </div>
                       <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                          <p className="text-green-600 font-bold">{item.price}</p>
                          <div className="flex gap-1 mt-3 text-yellow-400">
                             <Star size={16} fill="currentColor" />
                             <Star size={16} fill="currentColor" />
                             <Star size={16} fill="currentColor" />
                             <Star size={16} fill="currentColor" />
                             <Star size={16} fill="currentColor" />
                          </div>
                          <p className="text-xs text-gray-400 mt-2">"Smooth process and great support!"</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Safety & FAQ */}
        <section className="py-20 bg-white dark:bg-gray-900">
           <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16">
                 <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Your Safety is Our Priority</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                       We understand the risks involved in selling property. That's why we have strict measures in place.
                    </p>
                    <ul className="space-y-4">
                       <li className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 text-green-600 rounded-full"><Shield size={20} /></div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">Verified Buyer Profiles</span>
                       </li>
                       <li className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 text-green-600 rounded-full"><Shield size={20} /></div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">Secure Document Handling</span>
                       </li>
                       <li className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 text-green-600 rounded-full"><Shield size={20} /></div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">Spam-free Communication</span>
                       </li>
                    </ul>
                 </div>
                 
                 <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Questions</h2>
                    <div className="space-y-4">
                       <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                          <div className="flex items-center gap-3 mb-2">
                             <HelpCircle size={20} className="text-green-600" />
                             <h4 className="font-bold text-gray-900 dark:text-white">Is it really free?</h4>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 ml-8">Yes, listing your property is 100% free. You only pay a standard brokerage fee on successful sale.</p>
                       </div>
                       <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                          <div className="flex items-center gap-3 mb-2">
                             <HelpCircle size={20} className="text-green-600" />
                             <h4 className="font-bold text-gray-900 dark:text-white">How long does it take?</h4>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 ml-8">Most properties on our platform get sold within 45 days, compared to the market average of 90 days.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 backdrop-blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 backdrop-blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to sell your property?</h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">Join thousands of owners who trust Property Bundle for a seamless selling experience.</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-white text-green-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg"
            >
              Post Your Property for Free
            </button>
          </div>
        </section>
      </div>
      <Footer />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Sell Your Property">
        <OwnerForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Owner;
