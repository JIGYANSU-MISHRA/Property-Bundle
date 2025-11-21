import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useDarkMode } from "./DarkModeContext";
import { FaPhoneAlt, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "hero" },
    { link: "About", path: "about" },
    { link: "Properties", path: "properties" },
    { link: "Services", path: "services" },
    { link: "Testimonial", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className={`${darkMode ? "dark bg-gray-900" : "light bg-white shadow-md"} fixed w-full top-0 z-50 py-3 sm:py-4 px-4 sm:px-6 lg:px-20 flex justify-between items-center transition-all duration-300`}>
      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-4">
        <Link
          to="hero"
          spy
          smooth
          offset={-80}
          duration={500}
          className="text-green-600 dark:text-green-400 font-bold text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer hover:text-green-700 dark:hover:text-green-300 transition-colors"
        >
          Property Bundle
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-4 xl:gap-8">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            spy
            smooth
            offset={-80}
            duration={500}
            onSetActive={() => {}}
            onSetInactive={() => {}}
            className="text-gray-800 dark:text-white font-semibold uppercase text-xs xl:text-sm cursor-pointer px-2 xl:px-3 py-2 rounded-lg transition duration-300 hover:bg-green-600 hover:text-white"
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-800 dark:text-white text-2xl">
          {isMenuOpen ? <FaXmark /> : <FaBars />}
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
            <FaXmark />
          </button>
        </div>
        <ul className="flex flex-col gap-2 sm:gap-4">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy
              smooth
              offset={-80}
              duration={500}
              onSetActive={() => {}}
              onSetInactive={() => {}}
              className="block text-base sm:text-lg uppercase font-semibold cursor-pointer p-3 rounded-lg transition duration-300 hover:bg-green-600 hover:text-white text-left"
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-6">
        <div className="hidden xl:flex items-center gap-2">
          <FaPhoneAlt className="text-green-600 text-lg xl:text-xl" />
          <span className="text-gray-800 dark:text-white text-base xl:text-lg font-semibold">77777 77777</span>
        </div>
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="flex items-center justify-center w-9 h-9 xl:w-10 xl:h-10 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? (
            <FaMoon className="text-yellow-300" size={16} />
          ) : (
            <FaSun className="text-yellow-400" size={16} />
          )}
        </button>
        <FaUserCircle className="text-green-600 text-2xl xl:text-3xl" />
      </div>
    </nav>
  );
};

export default Header;
