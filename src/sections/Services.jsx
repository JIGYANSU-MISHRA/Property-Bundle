import React, { useEffect, useState } from "react";
import { service } from "../components/export";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [expandedService, setExpandedService] = useState(null);

  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const { darkMode} = useDarkMode();

  const toggleExpanded = (index) => {
    setExpandedService(prev => (prev === index ? null : index));
  };

  return (
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        id="services"
        className={`${
          darkMode ? "dark bg-gray-900" : "light bg-green-50"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10 relative overflow-hidden`}
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-gradient-to-br from-green-200 via-transparent to-green-300 dark:from-green-900 dark:to-green-800" />

        <div className="relative flex flex-col justify-center items-center gap-4 w-full">
          <span data-aos="zoom-in" className="text-green-600 dark:text-green-400 tracking-widest font-semibold uppercase">Our Services</span>
          <h2
            data-aos="zoom-in"
            className="text-black text-[34px] md:text-[40px] font-semibold leading-tight dark:text-white text-center"
          >
            Everything you need for a seamless property journey
          </h2>
          <p
            data-aos="zoom-in"
            className="text-gray-600 dark:text-gray-300 text-center max-w-3xl"
          >
            From valuation to legal support and professional marketing, our end‑to‑end services help you buy, sell, and invest with confidence.
          </p>
        </div>

        <div id="service-box" className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          {service.map((item, index) => {
            const featuresList = item.features && item.features.length > 0
              ? item.features
              : ["Expert guidance", "Transparent process", "End-to-end support"];

            const showFeatures = hoveredService === index || expandedService === index;

            return (
              <div 
                data-aos="zoom-in" 
                data-aos-delay="200" 
                key={index} 
                className={`bg-white dark:bg-gray-800 h-auto px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-green-600/40 cursor-pointer transition-all duration-500 ease-out transform hover:scale-[1.015] hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden group`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => toggleExpanded(index)}
              >
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

                <div className="relative z-10 w-full">
                  <div className="p-6 rounded-full bg-green-200 dark:bg-green-900 group-hover:bg-green-300 dark:group-hover:bg-green-800 transition-colors duration-500 ease-out w-fit">
                    <item.icon className="text-green-600 dark:text-green-400 size-10 transform group-hover:scale-110 transition-transform duration-500 ease-out"/>
                  </div>

                  <h3 className="text-black text-[22px] font-semibold dark:text-white mt-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-base text-slate-700 dark:text-gray-200 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Service Features - smooth expand/collapse */}
                  <div className={`mt-4 space-y-2 transition-all duration-500 ease-out ${showFeatures ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-1 overflow-hidden'}`}>
                    {featuresList.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <FaCheck className="text-green-600 text-xs" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-4 inline-flex items-center gap-2 text-green-700 dark:text-green-300 font-semibold hover:text-green-800 dark:hover:text-green-200 transition-colors duration-300">
                    Learn more
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services Info */}
        <div className="w-full mt-16 relative z-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            <div data-aos="fade-right" className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
                Why Choose Our Services?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Expert team with 10+ years of experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Transparent pricing and no hidden costs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">24/7 customer support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Legal compliance and documentation support</span>
                </li>
              </ul>
              <div className="mt-6">
                <a href="#contact" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Get Free Consultation
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>

            <div data-aos="fade-left" className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
                Our Success Metrics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">35+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">₹5Cr+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Total Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">2hrs</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Response Time</div>
                </div>
              </div>
            </div>
          </div>
          {/* How it works */}
          <div className="mt-10 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6 text-center">How It Works</h3>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
              {[
                { step: '1', title: 'Consult', desc: 'Tell us your goals' },
                { step: '2', title: 'Plan', desc: 'Get a tailored strategy' },
                { step: '3', title: 'Execute', desc: 'We handle the process' },
                { step: '4', title: 'Close', desc: 'Secure the best deal' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto mb-2 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-700 dark:text-green-300 font-bold">
                    {s.step}
                  </div>
                  <div className="font-semibold text-gray-800 dark:text-gray-200">{s.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
