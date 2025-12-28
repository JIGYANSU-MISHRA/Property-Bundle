 import React from 'react';
import { Network, Target, Award, ArrowRight, Zap, Smartphone, Handshake } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Modal from '../../components/Modal';
import BrokerForm from '../../components/Forms/BrokerForm';

const Broker = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <>
      <Header />
      <div className="pt-20 bg-white dark:bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 to-emerald-900 py-20 lg:py-32 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/30 border border-green-400/30 text-green-200 font-semibold text-sm mb-8 backdrop-blur-sm">
              For Real Estate Brokers & Agents
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight max-w-4xl">
              Supercharge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Brokerage Business</span>
            </h1>
            <p className="text-xl text-green-100 mb-10 max-w-2xl">
              Join India's largest network of high-performing brokers. Get genuine leads, access exclusive inventory, and close deals faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-white text-green-900 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2"
               >
                  Click to Join Partner Network
                  <ArrowRight size={20} />
               </button>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How it Works</h2>
              <p className="text-gray-600 dark:text-gray-400">Join our network and start earning in 3 simple steps.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
               {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>

              <div className="relative z-10 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:translate-y-[-5px] transition-transform duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-green-600/30">1</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Register</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Sign up as a partner and complete your KYC verification process instantly.</p>
              </div>

              <div className="relative z-10 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:translate-y-[-5px] transition-transform duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-green-600/30">2</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Get Access</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Access our inventory, leads, and marketing collaterals to pitch to your clients.</p>
              </div>

              <div className="relative z-10 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:translate-y-[-5px] transition-transform duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-green-600/30">3</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Earn Big</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Close deals and receive industry-leading commissions directly to your bank.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white dark:bg-gray-900 -mt-10 relative z-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-t-4 border-green-500">
                 <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <Target size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Genuine Leads</h3>
                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Stop chasing ghosts. Get verified leads from buyers actively looking for properties in your area.</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-t-4 border-green-500">
                 <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <Network size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Inventory Network</h3>
                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Connect with other brokers to buy and sell inventory. Don't lose a client because you didn't have the right property.</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-t-4 border-green-500">
                 <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <Award size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Higher Commissions</h3>
                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Access exclusive projects with higher commission slabs and faster payouts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* App Download/Ecosystem Section */}
        <section className="py-20 bg-green-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1">
                 <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] max-w-full shadow-xl">
                    <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                      {/* Mock App Screen */}
                      <div className="bg-green-600 h-32 p-6 text-white rounded-b-3xl">
                         <p className="text-sm opacity-80">Welcome back,</p>
                         <h3 className="text-xl font-bold">Agent Smith</h3>
                         <div className="mt-6 flex justify-between">
                            <div>
                              <p className="text-xs opacity-70">Active Leads</p>
                              <p className="font-bold text-xl">24</p>
                            </div>
                            <div>
                              <p className="text-xs opacity-70">Closures</p>
                              <p className="font-bold text-xl">05</p>
                            </div>
                         </div>
                      </div>
                      <div className="p-4 space-y-4">
                         <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl flex gap-3 items-center">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">JD</div>
                            <div>
                               <p className="font-bold text-sm text-gray-800 dark:text-white">John Doe</p>
                               <p className="text-xs text-gray-400">Looking for 3BHK in Patia</p>
                            </div>
                         </div>
                         <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl flex gap-3 items-center">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">AS</div>
                            <div>
                               <p className="font-bold text-sm text-gray-800 dark:text-white">Anita Singh</p>
                               <p className="text-xs text-gray-400">Budget: 1.5 Cr</p>
                            </div>
                         </div>
                          <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl flex gap-3 items-center">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">RK</div>
                            <div>
                               <p className="font-bold text-sm text-gray-800 dark:text-white">Rahul Kumar</p>
                               <p className="text-xs text-gray-400">Scheduled Visit Today</p>
                            </div>
                         </div>
                      </div>
                    </div>
                 </div>
               </div>
               
               <div className="order-1 lg:order-2">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">Manage Your Business on the Go</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                    Our dedicated broker app gives you the power to manage leads, schedule visits, and track your commissions from anywhere.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <div className="p-1 rounded-full bg-green-100 text-green-600"><Handshake size={16} /></div>
                        <span>One-click lead acceptance</span>
                     </li>
                     <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <div className="p-1 rounded-full bg-green-100 text-green-600"><Handshake size={16} /></div>
                        <span>Instant CRM updates</span>
                     </li>
                      <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <div className="p-1 rounded-full bg-green-100 text-green-600"><Handshake size={16} /></div>
                        <span>Digital business card sharing</span>
                     </li>
                  </ul>
               </div>
             </div>
          </div>
        </section>



        {/* Testimonials */}
        <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
           <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Stories from our Top Partners</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Rajesh Gupta",
                    role: "Independent Broker, Mumbai",
                    quote: "Property Bundle changed the game for me. The leads are actually genuine, and I closed 3 deals in my first month itself.",
                    initial: "R"
                  },
                  {
                    name: "Priya Sharma",
                    role: "Agency Owner, Bangalore",
                    quote: "The CRM tools are fantastic. I can track my entire team's performance and payouts happen on time, every time.",
                    initial: "P"
                  },
                  {
                    name: "Amit Patel",
                    role: "Channel Partner, Ahmedabad",
                    quote: "Access to exclusive developer mandates gave me an edge over other brokers. My commission revenue has doubled.",
                    initial: "A"
                  }
                ].map((testimonial, i) => (
                   <div key={i} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl relative hover:shadow-lg transition-shadow">
                      <div className="absolute -top-6 left-8 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-white dark:border-gray-800">
                        {testimonial.initial}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 italic mb-6 mt-4">"{testimonial.quote}"</p>
                      <div>
                         <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                         <p className="text-sm text-green-600">{testimonial.role}</p>
                      </div>
                   </div>
                ))}
              </div>
           </div>
        </section>


        
        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6 max-w-4xl">
             <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Frequently Asked Questions</h2>
             <div className="space-y-6">
               {[
                 {
                   q: "Is there a joining fee?",
                   a: "No, joining the Property Bundle Partner Network is completely free. You only earn when you close a deal."
                 },
                 {
                    q: "How soon are commissions paid?",
                    a: "We offer one of the fastest payout cycles in the industry. Most commissions are processed within 15 days of deal closure/disbursement."
                 },
                 {
                    q: "Can I sell properties in other cities?",
                    a: "Yes! As a partner, you can sell our inventory across all cities where Property Bundle is present."
                 },
                 {
                    q: "Do you provide marketing support?",
                    a: "Absolutely. You get access to unbranded brochures, project walkthrough videos, and social media creatives to share with your clients."
                 }
               ].map((faq, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                     <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                     <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                  </div>
               ))}
             </div>
          </div>
        </section>

        {/* Join Network CTA */}
        <section className="bg-green-900 py-16 text-center text-white">
          <div className="container mx-auto px-6">
             <h2 className="text-3xl font-bold mb-6">Join 5000+ Brokers Growing Their Business</h2>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-4 bg-yellow-400 text-green-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors shadow-lg"
              >
                Become a Partner
              </button>
           </div>
         </section>
      </div>
      <Footer />
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Join Partner Network">
        <BrokerForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Broker;
