import React, { useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const ContactModern = () => {
  const { darkMode } = useDarkMode();
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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 2000);
  };

  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" }
  ];

  return (
    <section className={`${darkMode ? "dark bg-gray-900" : "light bg-white"} w-full px-4 sm:px-6 lg:px-20 py-16 lg:py-24`}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
        
        {/* Left Column - Contact Info */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Have questions or <br /> need assistance?
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We're here to help! Whether you have inquiries about our services, need guidance on your next steps, or require support, our team is ready to assist you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <div>
              <h3 className="text-green-600 font-semibold mb-2">Message Us</h3>
              <p className="text-gray-900 dark:text-white font-medium">info@propertybundle.in</p>
            </div>
            <div>
              <h3 className="text-green-600 font-semibold mb-2">Call Us</h3>
              <p className="text-gray-900 dark:text-white font-medium">
                +91 9668240206<br/>+91 7205099129
              </p>
            </div>
            <div>
              <h3 className="text-green-600 font-semibold mb-2">Location</h3>
              <p className="text-gray-900 dark:text-white font-medium">
                Office No: 307, 3rd Floor,<br/>Esplanade One Mall,<br/>Rasulgarh, Bhubaneswar,<br/>Odisha 751010
              </p>
            </div>
            <div>
              <h3 className="text-green-600 font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-900 dark:text-white font-medium">Monday - Friday<br/>9:00 AM - 7:00 PM</p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-gray-500 uppercase text-xs font-semibold tracking-wider mb-4">Social Media</h3>
            <div className="flex gap-4">
               {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href=""
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-green-600 hover:text-white dark:hover:bg-green-600 dark:hover:text-white transition-all transform hover:scale-110"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
           {submitSuccess && (
              <div className="w-full bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you! We'll be in touch shortly.
              </div>
            )}
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

             <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                placeholder="Enter the subject"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Enter your message here"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white resize-none`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white font-bold py-4 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-600/20"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactModern;
