import React, { useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const { darkMode } = useDarkMode();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I list my property on Property Bundle?",
      answer: "Listing your property is simple! Click on the 'Sell' dropdown in the navigation menu and select 'List Your Property'. Follow the easy steps to add property details, photos, and set your price."
    },
    {
      question: "Are the properties verified?",
      answer: "Yes, we take property verification seriously. Our team conducts checks on all listings to ensure accuracy and authenticity, providing you with a safe and reliable property search experience."
    },
    {
      question: "Can I schedule virtual tours?",
      answer: "Absolutely! Many of our listings offer virtual tours. Look for the 'Virtual Tour' badge on property cards or request one directly through the 'Contact Agent' feature."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods including credit/debit cards, net banking, and UPI for premium services. For property transactions, payment terms are decided between the buyer and seller."
    },
    {
      question: "Can I work with a specific agent property on Property Bundle?",
      answer: "Yes, you can browse our 'Real Estate Agents' directory under the 'Sell' menu to find and connect with specific agents who specialize in your desired area or property type."
    },
    {
      question: "How often are the listings updated?",
      answer: "Our listings are updated in real-time. We encourage our sellers and agents to keep their property availability and pricing current to ensure you have the latest information."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('form'); // Assuming the form is in the contact section
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className={`${darkMode ? "dark bg-gray-900" : "light bg-white"} w-full px-4 sm:px-6 lg:px-20 py-16 lg:py-24 border-t border-gray-100 dark:border-gray-800`}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
        
        {/* Left Column - Header & CTA */}
        <div className="sticky top-24 mt-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Frequently Asked <br /> Questions
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
            Answers to your real estate questions and concern
          </p>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Still have a Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
              We're here to help! Don't hesitate - ask away and get the answers you need.
            </p>
            <button 
              onClick={scrollToContact}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Column - Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border-b border-gray-200 dark:border-gray-700 pb-4`}>
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-2 text-left group"
              >
                <span className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-green-600' : 'text-gray-800 dark:text-white group-hover:text-green-600'}`}>
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-green-600' : 'text-gray-400'}`}>
                  <ChevronDown size={20} />
                </span>
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
