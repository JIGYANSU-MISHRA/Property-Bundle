import React, { useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { darkMode} = useDarkMode();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: FaPhone,
      title: "Call Us",
      value: "+91 99999 99999",
      description: "Available 24/7 for urgent inquiries",
      action: "Call Now",
      color: "text-blue-600"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+91 88888 88888",
      description: "Quick responses via WhatsApp",
      action: "Message Now",
      color: "text-green-600"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      value: "info@propertybundle.com",
      description: "Get detailed information via email",
      action: "Send Email",
      color: "text-red-600"
    }
  ];

  const socialLinks = [
    { icon: FaFacebook, label: "Facebook", color: "text-blue-600" },
    { icon: FaInstagram, label: "Instagram", color: "text-pink-600" },
    { icon: FaTwitter, label: "Twitter", color: "text-blue-400" },
    { icon: FaLinkedin, label: "LinkedIn", color: "text-blue-700" }
  ];

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}>
      <section
        id="contact"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-green-100"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36 py-12 sm:py-16 lg:py-20 gap-8 sm:gap-10`}
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-green-500 dark:text-white uppercase tracking-widest text-xs sm:text-sm md:text-base">
            Contact Us
          </h1>
          <h2
            className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight sm:leading-snug md:leading-10 dark:text-white mt-3 sm:mt-4 px-2"
          >
            Get in touch with us today
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mt-3 sm:mt-4 px-2">
            If you have any questions or need further information, feel free to reach out to us. We are here to help you find your dream property.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 sm:gap-8 lg:gap-10">
          {/* Form Section */}
          <div
            className="bg-white dark:bg-black p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center items-start gap-3 sm:gap-4 rounded-xl w-full shadow-lg"
          >
            <h1 className="text-xl sm:text-2xl text-black font-semibold dark:text-white mb-3 sm:mb-4">Send us a message</h1>
            
            {submitSuccess && (
              <div className="w-full bg-green-100 border border-green-400 text-green-700 px-3 sm:px-4 py-2 sm:py-3 rounded mb-3 sm:mb-4 text-sm sm:text-base">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="w-full space-y-3 sm:space-y-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3 sm:gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 border-2 rounded-xl bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-sm sm:text-base ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Enter your E-mail"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 border-2 rounded-xl bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-sm sm:text-base ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-3 sm:gap-4">
                <div>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 border-2 rounded-xl bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-sm sm:text-base ${
                      errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Subject (optional)"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <textarea
                  cols="30"
                  rows="5"
                  placeholder="Enter your message here..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 border-2 rounded-xl bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-sm sm:text-base resize-y ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 w-full text-sm sm:text-base md:text-md px-6 sm:px-8 py-2.5 sm:py-3 text-white font-semibold rounded-xl hover:bg-green-700 dark:hover:bg-green-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col justify-center items-start gap-6 sm:gap-8 lg:p-12 xl:p-20 p-4 sm:p-6">
            <h1 className="text-green-500 dark:text-white uppercase tracking-widest text-xs sm:text-sm md:text-base">
              Reach Us
            </h1>
            <h1
              className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight sm:leading-snug md:leading-10 dark:text-white"
            >
              Multiple ways to connect
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Choose the most convenient way to reach us. We're here to help you with all your real estate needs.
            </p>

            {/* Contact Methods */}
            <div className="w-full space-y-3 sm:space-y-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className={`p-2 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${method.color} flex-shrink-0`}>
                    <method.icon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0 w-full sm:w-auto">
                    <h3 className="font-semibold text-sm sm:text-base text-black dark:text-white">{method.title}</h3>
                    <p className="text-green-600 dark:text-green-400 font-medium text-sm sm:text-base break-words">{method.value}</p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{method.description}</p>
                  </div>
                  <button className={`w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg bg-green-600 text-white text-xs sm:text-sm font-medium hover:bg-green-700 transition-colors whitespace-nowrap`}>
                    {method.action}
                  </button>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="w-full bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <FaClock className="text-green-600 text-lg sm:text-xl flex-shrink-0" />
                <h3 className="font-semibold text-sm sm:text-base text-black dark:text-white">Office Hours</h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="font-medium sm:font-normal">Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="font-medium sm:font-normal">Saturday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="font-medium sm:font-normal">Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="w-full">
              <h3 className="font-semibold text-sm sm:text-base text-black dark:text-white mb-3 sm:mb-4">Follow Us</h3>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={social.label}
                    className={`p-2.5 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all transform hover:scale-110 ${social.color}`}
                  >
                    <social.icon size={18} className="sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
