import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { DarkModeProvider } from './components/DarkModeContext'
import Home from './Pages/Home'
import AboutUs from './Pages/About-us'
import ContactUs from './Pages/ContactUs'

import Developer from './Pages/Sell/Developer';
import Broker from './Pages/Sell/Broker';
import Owner from './Pages/Sell/Owner';
import Properties from './Pages/Properties';
import PuriPlots from './Pages/PuriPlots';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sell/developers" element={<Developer />} />
          <Route path="/sell/brokers" element={<Broker />} />
          <Route path="/sell/owners" element={<Owner />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/buy-residential-plots-in-puri-konark-marine-drive" element={<PuriPlots />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  )
}

export default App
