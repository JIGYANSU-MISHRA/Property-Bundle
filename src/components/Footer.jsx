import React from "react";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";

const Footer = () => {
  const { darkMode } = useDarkMode(); 
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-gray-900"
        } w-full m-auto lg:px-20 px-6 pt-16 pb-10 border-t border-gray-800`}
      >
        <div className="grid lg:grid-cols-4 grid-cols-1 justify-center items-start lg:gap-16 gap-10">
        {/* About Us Section */}
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className="text-slate-200 text-justify">
            At <span className="font-semibold">HomeDeal</span>, we are dedicated to helping you find the perfect property that matches your lifestyle and aspirations. With years of experience in the real estate industry, we specialize in residential, commercial, and investment properties across India.
          </p>
          <div className="flex justify-start items-center gap-3 mt-4">
            {[
              { Icon: FaFacebookF, label: 'Facebook' },
              { Icon: FaInstagram, label: 'Instagram' },
              { Icon: FaTwitter, label: 'Twitter' },
              { Icon: FaYoutube, label: 'YouTube' },
            ].map(({ Icon, label }, index) => (
              <a
                key={index}
                href="#"
                aria-label={label}
                className="p-3 rounded-lg bg-white text-gray-800 hover:bg-green-600 hover:text-white cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Quick Links</h1>
          <ul className="space-y-2 text-slate-200">
            {[
              { label: 'Home', to: 'hero' },
              { label: 'About', to: 'about' },
              { label: 'Properties', to: 'properties' },
              { label: 'Services', to: 'services' },
              { label: 'Testimonials', to: 'testimonials' },
              { label: 'Contact', to: 'contact' },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  offset={-80}
                  duration={500}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          {[
            { icon: <FaBuilding className="text-white size-5" />, text: "HomeDeal, 123 Business Street, Bhubaneswar, India" },
            { icon: <FaMobile className="text-white size-5" />, text: "+91 99999 99999" },
            { icon: <FaFax className="text-white size-5" />, text: "+91 77777 77777" },
            { icon: <IoMdMail className="text-white size-5" />, text: "info@homedeal.com" },
          ].map((item, index) => (
            <div key={index} className="flex justify-center items-center gap-3">
              {item.icon}
              <p className="text-slate-200">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Newsletter / Latest Properties */}
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Latest Properties</h1>
          {[
            { img: prop7, title: "Luxury Villa with Ocean View", price: "₹ 3.45 Cr" },
            { img: prop8, title: "Modern Apartment in City Center", price: "₹ 2.75 Cr" },
          ].map((property, index) => (
            <div key={index} className="flex justify-center items-center gap-4">
              <img
                src={property.img}
                alt={property.title}
                className="w-[110px] h-[70px] object-cover rounded-md transform hover:scale-105 cursor-pointer transition-transform duration-300"
              />
              <div>
                <h1 className="text-base text-white">{property.title}</h1>
                <p className="text-slate-400 text-sm">{property.price}</p>
              </div>
            </div>
          ))}

          <div className="w-full h-px bg-gray-700 my-3" />
          <h2 className="text-white text-lg font-semibold">Subscribe for updates</h2>
          <form className="w-full flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </form>
        </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-300 text-sm">©{year} HomeDeal India. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-300 text-sm">
            <Link to="privacy" className="cursor-pointer hover:text-white">Privacy</Link>
            <span className="opacity-40">|</span>
            <Link to="terms" className="cursor-pointer hover:text-white">Terms</Link>
            <span className="opacity-40">|</span>
            <Link to="contact" smooth offset={-80} duration={500} className="cursor-pointer hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <div
        id="icon-box"
        className="bg-green-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6"
      >
        <Link 
          to="hero" 
          spy={true} 
          offset={-100} 
          smooth={true} 
          duration={500}
          onSetActive={() => {}}
          onSetInactive={() => {}}
        >
          <FaArrowUp className="size-6 text-white" />
        </Link>
      </div>

      {/* Dark Mode Toggle moved to Header */}
    </>
  );
};

export default Footer;