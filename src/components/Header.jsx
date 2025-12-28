import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";
import { useDarkMode } from "./DarkModeContext";
import { X, Menu, Phone, UserCircle, Moon, Sun } from "lucide-react";

import NavDropdown from "./NavDropdown";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (path) => {
    if (path === "about") {
      navigate("/about-us");
      closeMenu();
    } else if (path === "contact") {
      navigate("/contact-us");
      closeMenu();
    } else {

      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.getElementById(path);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      closeMenu();
    }
  };

  const dropdownData = {
    buy: {
      propertyTypes: ["Flats", "Houses", "Builder floors", "Plots", "Villas", "Commercial properties"],
      popularCities: ["Kolkata", "Bhubaneswar", "Puri"],
      popularAreas: ["Patia", "New Town", "Sea Beach Road", "Khandagiri", "Jayadev Vihar", "Gariahat"],
      bhk: {
        "Flats": ["1 RK Flats", "1 BHK Flats", "2 BHK Flats", "3 BHK Flats", "4+ BHK Flats"],
        "Houses": ["1 BHK House", "2 BHK House", "3 BHK House", "4+ BHK House", "Duplex"],
        "Builder floors": ["2 BHK Floor", "3 BHK Floor", "4 BHK Floor"],
        "Plots": ["Residential Plot", "Commercial Plot", "Agricultural Land"],
        "Villas": ["3 BHK Villa", "4 BHK Villa", "5 BHK+ Villa"],
        "Commercial properties": ["Office Space", "Shop/Retail", "Showroom", "Warehouse"]
      },
      popularSearches: ["Flats without brokerage", "Under construction flats", "Affordable projects for sale", "Ready to move-in projects", "New residential projects", "Resale properties"]
    },
    sell: {
      packages: [
        {
          title: "Developers",
          subtitle: "Launch or sell homes",
          path: "/sell/developers"
        },
        {
          title: "Brokers",
          subtitle: "List and grow business",
          path: "/sell/brokers"
        },
        {
          title: "Owners",
          subtitle: "Sell or rent easily",
          path: "/sell/owners"
        }
      ]
    }
  };

  const navItems = [
    { link: "Home", path: "hero" },
    { link: "About", path: "about" },
    { link: "Buy", path: "buy", dropdown: true, data: dropdownData.buy },
    { link: "Sell", path: "sell", dropdown: true, data: dropdownData.sell, isCompact: true },
    { link: "Properties", path: "properties" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className={`${darkMode ? "dark bg-gray-900" : "light bg-white shadow-md"} fixed w-full top-0 z-50 py-3 sm:py-4 px-4 sm:px-6 lg:px-20 flex justify-between items-center transition-all duration-300`}>
      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ScrollLink
          to="hero"
          spy
          smooth
          offset={-80}
          duration={500}
          className="text-green-600 dark:text-green-400 font-bold text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer hover:text-green-700 dark:hover:text-green-300 transition-colors"
        >
          Property Bundle
        </ScrollLink>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-4 xl:gap-8 items-center">
        {navItems.map(({ link, path, dropdown, data, isCompact }) => (
          dropdown ? (
            <li key={path} className={`group ${isCompact ? 'relative' : ''}`}>
              <button 
                className="flex items-center gap-1 text-gray-800 dark:text-white font-semibold uppercase text-xs xl:text-sm cursor-pointer px-2 xl:px-3 py-2 rounded-lg transition duration-300 hover:text-green-600"
              >
                {link}
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <NavDropdown data={data} isCompact={isCompact} />
            </li>
          ) : path === "about" || path === "contact" || path === "properties" ? (
             <RouterLink
              key={path}
              to={path === "about" ? "/about-us" : path === "properties" ? "/properties" : "/contact-us"}
              className="text-gray-800 dark:text-white font-semibold uppercase text-xs xl:text-sm cursor-pointer px-2 xl:px-3 py-2 rounded-lg transition duration-300 hover:bg-green-600 hover:text-white"
            >
              {link}
            </RouterLink>
          ) : (
             <ScrollLink
              key={path}
              to={path}
              spy
              smooth
              offset={-80}
              duration={500}
              className="text-gray-800 dark:text-white font-semibold uppercase text-xs xl:text-sm cursor-pointer px-2 xl:px-3 py-2 rounded-lg transition duration-300 hover:bg-green-600 hover:text-white"
              onClick={() => handleNavClick(path)}
            >
              {link}
            </ScrollLink>
          )
        ))}
      </ul>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-800 dark:text-white text-2xl">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div className={`${isMenuOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 w-3/4 sm:w-2/3 max-w-sm h-screen bg-gray-800 text-white shadow-lg p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 transition-transform duration-300 lg:hidden z-50`}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-green-400 font-bold text-lg">Menu</span>
          <button onClick={closeMenu} className="text-2xl hover:text-green-400 transition-colors">
            <X />
          </button>
        </div>
        <ul className="flex flex-col gap-2 sm:gap-4">
          {navItems.map(({ link, path }) => (
              path === "about" || path === "contact" || path === "properties" ? (
                <RouterLink
                  key={path}
                  to={path === "about" ? "/about-us" : path === "properties" ? "/properties" : "/contact-us"}
                  className="block text-base sm:text-lg uppercase font-semibold cursor-pointer p-3 rounded-lg transition duration-300 hover:bg-green-600 hover:text-white text-left"
                  onClick={closeMenu}
                >
                  {link}
                </RouterLink>
              ) : (
                <ScrollLink
                  key={path}
                  to={path}
                  spy
                  smooth
                  offset={-80}
                  duration={500}
                  className="block text-base sm:text-lg uppercase font-semibold cursor-pointer p-3 rounded-lg transition duration-300 hover:bg-green-600 hover:text-white text-left"
                  onClick={() => handleNavClick(path)}
                >
                  {link}
                </ScrollLink>
            )
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-6">
        <div className="hidden xl:flex items-center gap-2">
          <Phone className="text-green-600 text-lg xl:text-xl" />
          <span className="text-gray-800 dark:text-white text-base xl:text-lg font-semibold">77777 77777</span>
        </div>
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="flex items-center justify-center w-9 h-9 xl:w-10 xl:h-10 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? (
            <Moon className="text-yellow-300" size={16} />
          ) : (
            <Sun className="text-yellow-400" size={16} />
          )}
        </button>
        <UserCircle className="text-green-600 text-2xl xl:text-3xl" />
      </div>
    </nav>
  );
};

export default Header;
