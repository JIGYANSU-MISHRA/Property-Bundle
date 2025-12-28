import React from 'react';
import { useDarkMode } from '../components/DarkModeContext';

const MapSection = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className={`${darkMode ? 'dark bg-gray-900' : 'light bg-white'} w-full px-4 sm:px-6 lg:px-20 py-16 lg:py-24`}>
       <div className="max-w-7xl mx-auto h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
        <iframe 
          title="Office Location"
          src="https://maps.google.com/maps?q=Esplanade%20One%20Mall,%20Rasulgarh,%20Bhubaneswar&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-2xl"
        ></iframe>
      </div>
      <p className="sr-only">Esplanade One Mall, Rasulgarh, Bhubaneswar, Odisha 751010</p>
    </section>
  );
};

export default MapSection;
