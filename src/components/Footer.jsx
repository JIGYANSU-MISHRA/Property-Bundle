import React from "react";
import { useDarkMode } from "./DarkModeContext";
import { Link } from "react-scroll";
import { Facebook, Instagram, Twitter, Youtube, Building2, Smartphone, Phone, ArrowUp, Mail } from "lucide-react";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";

const Footer = () => {
  const { darkMode } = useDarkMode();
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        className={`${
          darkMode ? "bg-black" : "bg-gray-900"
        } w-full m-auto px-6 md:px-12 lg:px-20 pt-16 pb-10 border-t border-gray-800`}
      >
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* About Section */}
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-semibold">About Us</h1>
            <p className="text-slate-200 text-justify leading-relaxed">
              At <span className="font-semibold">Property Bundle</span>, we help you find the
              perfect home or investment property. With years of experience in real estate, we deal in residential, commercial, and luxury properties across India.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href=""
                  className="p-3 rounded-lg bg-white text-gray-800 hover:bg-green-600 hover:text-white hover:scale-105 transition-all"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-semibold">Quick Links</h1>
            <ul className="space-y-2 text-slate-200">
              {[
                { label: "Home", to: "hero" },
                { label: "About", to: "about" },
                { label: "Properties", to: "properties" },
                { label: "Services", to: "services" },
                { label: "Testimonials", to: "testimonials" },
                { label: "Contact", to: "contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth
                    offset={-80}
                    duration={500}
                    className="cursor-pointer hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
            {[
              {
                icon: <Building2 className="text-white size-5" />,
                text: "Property Bundle, 123 Business Street, Bhubaneswar, India",
              },
              {
                icon: <Smartphone className="text-white size-5" />,
                text: "+91 99999 99999",
              },
              {
                icon: <Phone className="text-white size-5" />,
                text: "+91 77777 77777",
              },
              {
                icon: <Mail className="text-white size-5" />,
                text: "info@propertybundle.com",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                {item.icon}
                <p className="text-slate-200">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Latest Properties + Newsletter */}
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-semibold">Latest Properties</h1>

            {[prop7, prop8].map((img, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={img}
                  alt="Property"
                  className="w-[110px] h-[70px] object-cover rounded-md hover:scale-105 transition cursor-pointer"
                />
                <div>
                  <h1 className="text-white text-base">
                    {index === 0
                      ? "Luxury Villa with Ocean View"
                      : "Modern Apartment in City Center"}
                  </h1>
                  <p className="text-slate-400 text-sm">
                    {index === 0 ? "₹ 3.45 Cr" : "₹ 2.75 Cr"}
                  </p>
                </div>
              </div>
            ))}

            <div className="w-full h-px bg-gray-700 my-3"></div>

            {/* Newsletter */}
            <h2 className="text-white text-lg font-semibold">Subscribe for updates</h2>
            <form className="w-full flex flex-col lg:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full lg:flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button className="w-full lg:w-auto px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-300 text-sm">©{year} Property Bundle India. All rights reserved.</p>

          <div className="flex gap-4 text-slate-300 text-sm">
            <Link className="cursor-pointer hover:text-white">Privacy</Link>
            <span className="opacity-40">|</span>
            <Link className="cursor-pointer hover:text-white">Terms</Link>
            <span className="opacity-40">|</span>
            <Link
              to="contact"
              smooth
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <div
        className="bg-green-600 p-4 rounded-full hover:bg-black fixed bottom-6 right-6 cursor-pointer transition lg:bottom-12"
      >
        <Link to="hero" smooth offset={-100} duration={500}>
          <ArrowUp className="size-6 text-white" />
        </Link>
      </div>
    </>
  );
};

export default Footer;