import React from 'react';
import { Building2, TrendingUp, BarChart3, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import DeveloperForm from '../../components/Forms/DeveloperForm';

const Developer = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <Header />
      <div className="pt-20 bg-white dark:bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white overflow-hidden min-h-[600px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Skyscrapers" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded bg-green-500/20 text-green-300 text-sm font-semibold mb-6 border border-green-500/30">
                For Real Estate Developers
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                Launch Your Projects to <span className="text-green-500">Millions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                Partner with the fastest growing real estate platform. We provide end-to-end sales and marketing solutions for your residential and commercial projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  Click to Partner with Us
                  <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-transparent border border-gray-500 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">500+</p>
                <p className="text-gray-500 uppercase text-xs tracking-wider">Trusted Developers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">10k+</p>
                <p className="text-gray-500 uppercase text-xs tracking-wider">Units Sold</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">5M+</p>
                <p className="text-gray-500 uppercase text-xs tracking-wider">Monthly Visits</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">₹20B+</p>
                <p className="text-gray-500 uppercase text-xs tracking-wider">GMV Sold</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How it Works</h2>
              <p className="text-gray-600 dark:text-gray-400">Partnering with us is seamless and impactful.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
               {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>

              <div className="relative z-10 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:translate-y-[-5px] transition-transform duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-green-600/30">1</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Onboard Project</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Share project details and marketing assets with our team for quick listing.</p>
              </div>

              <div className="relative z-10 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:translate-y-[-5px] transition-transform duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-green-600/30">2</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Activate Campaign</h3>
                <p className="text-gray-500 text-sm leading-relaxed">We launch targeted digital campaigns and activate our broker network.</p>
              </div>

              <div className="relative z-10 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:translate-y-[-5px] transition-transform duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-green-600/30">3</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Start Selling</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Receive qualified site visits and close bookings with our sales support.</p>
              </div>
            </div>
          </div>

</section>

        {/* Solutions Grid */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Comprehensive Solutions for Developers</h2>
              <p className="text-gray-500">We don't just list your properties; we act as your extended sales and marketing arm.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                  <Globe size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Digital Marketing</h3>
                <p className="text-gray-500 leading-relaxed">
                  Hyper-local targeting across Google, Facebook, and Instagram to generate high-intent leads for your specific project.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                  <Building2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Mandates</h3>
                <p className="text-gray-500 leading-relaxed">
                  Exclusive mandates where we take complete responsibility for sales velocity and pricing strategy.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Market Intelligence</h3>
                <p className="text-gray-500 leading-relaxed">
                  Data-driven insights on pricing trends, demand supply gaps, and competitor analysis to optimize your product.
                </p>
              </div>
            </div>
          </div>
        </section>


        
        {/* Network Reach Section */}
        <section className="py-20 bg-green-50 dark:bg-gray-800">
           <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Reach</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">Unmatched Distribution Network</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                       Your project gets visibility not just on our platform, but across our extensive network of channel partners and digital touchpoints.
                    </p>
                    
                    <div className="space-y-6">
                       <div className="flex gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                             <TrendingUp size={24} />
                          </div>
                          <div>
                             <h4 className="text-xl font-bold text-gray-900 dark:text-white">5,000+ Active Brokers</h4>
                             <p className="text-sm text-gray-500 dark:text-gray-400">Our partner network actively pitches your project to high-intent buyers.</p>
                          </div>
                       </div>
                       
                       <div className="flex gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                             <Globe size={24} />
                          </div>
                          <div>
                             <h4 className="text-xl font-bold text-gray-900 dark:text-white">Omnichannel Presence</h4>
                             <p className="text-sm text-gray-500 dark:text-gray-400">Campaigns across Google, Facebook, LinkedIn, and native ad networks.</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="bg-gray-900 rounded-2xl p-8 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-600/10 z-0"></div>
                    <div className="relative z-10">
                       <h3 className="text-2xl font-bold mb-8">Monthly Impact</h3>
                       <div className="grid grid-cols-2 gap-8">
                          <div>
                             <p className="text-4xl font-bold text-green-400 mb-2">5M+</p>
                             <p className="text-sm opacity-70">Digital Impressions</p>
                          </div>
                          <div>
                             <p className="text-4xl font-bold text-green-400 mb-2">50k+</p>
                             <p className="text-sm opacity-70">Site Visits Generated</p>
                          </div>
                          <div>
                             <p className="text-4xl font-bold text-green-400 mb-2">12k+</p>
                             <p className="text-sm opacity-70">Qualified Leads</p>
                          </div>
                          <div>
                             <p className="text-4xl font-bold text-green-400 mb-2">₹500Cr+</p>
                             <p className="text-sm opacity-70">Inventory Sold</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Case Studies / Success Stories */}
        <section className="py-24 bg-white dark:bg-gray-900">
           <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-10">
                 <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-2xl mb-6 shadow-lg">
                       <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Project A" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Residential</span>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-green-600 transition-colors">Green Valley Heights</h3>
                          <p className="text-gray-500">Bangalore, India</p>
                       </div>
                       <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Sold Out</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                       <div>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">450</p>
                          <p className="text-xs text-gray-500 uppercase">Units Sold</p>
                       </div>
                       <div>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">6 Mo</p>
                          <p className="text-xs text-gray-500 uppercase">Duration</p>
                       </div>
                       <div>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">100%</p>
                          <p className="text-xs text-gray-500 uppercase">Inventory</p>
                       </div>
                    </div>
                 </div>

                 <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-2xl mb-6 shadow-lg">
                       <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Project B" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                     <div className="flex justify-between items-start mb-4">
                       <div>
                          <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Commercial</span>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-green-600 transition-colors">Tech Park One</h3>
                          <p className="text-gray-500">Pune, India</p>
                       </div>
                       <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">90% Leased</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                       <div>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">2L</p>
                          <p className="text-xs text-gray-500 uppercase">Sq. Ft. Leased</p>
                       </div>
                       <div>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">3 Mo</p>
                          <p className="text-xs text-gray-500 uppercase">Duration</p>
                       </div>
                       <div>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">12%</p>
                          <p className="text-xs text-gray-500 uppercase">Above Market</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="lg:w-1/2">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">Built on Trust & Transparency</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-green-400">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Verified Leads Only</h4>
                        <p className="text-gray-400">Our 3-step verification process ensures you don't waste time on junk leads.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="mt-1 text-green-400">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Performance Tracking</h4>
                        <p className="text-gray-400">Real-time dashboard to track impressions, clicks, site visits, and bookings.</p>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="lg:w-1/2 relative">
                  <div className="absolute -inset-4 bg-green-600/20 rounded-xl blur-xl"></div>
                  <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Dashboard" className="relative rounded-xl shadow-2xl border border-gray-700" />
               </div>
            </div>
          </div>
        </section>

        {/* Simple CTA */}
         <section className="py-20 bg-white dark:bg-gray-900 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Ready to Scale Your Sales?</h2>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contact Sales Team
            </button>
          </div>
        </section>

      </div>
      <Footer />
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Partner with Us">
        <DeveloperForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Developer;
