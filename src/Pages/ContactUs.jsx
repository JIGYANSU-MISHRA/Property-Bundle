import React, { useEffect } from 'react'
import contactImage from '../assets/images/contact1.webp' // Fallback to jpg/png if webp not found, but coding for import.
import ContactModern from '../sections/ContactModern'
import MapSection from '../sections/MapSection'
import FAQ from '../sections/FAQ'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useDarkMode } from '../components/DarkModeContext'

const ContactUs = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`${darkMode ? 'dark bg-gray-900' : 'light bg-white'} w-full overflow-x-hidden`}>
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center mt-20 mb-8 sm:mb-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactImage})` }} // Using imported variable, user needs to ensure file exists or we use placeholder
        >
           {/* Overlay */}
           <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Get in Touch with Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
            If you have any questions or need further information, feel free to reach out to us. We are here to help you find your dream property.
          </p>
        </div>
      </div>

      <ContactModern />
      <MapSection />
      <FAQ />
      <Footer />
    </div>
  )
}

export default ContactUs
