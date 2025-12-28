import React, { useState } from 'react';
import { Send, Home, User, Phone, Mail, MapPin, IndianRupee, ArrowRight, Image, Video } from 'lucide-react';

const OwnerForm = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [propertyType, setPropertyType] = useState('Apartment');

  const configurations = {
    'Apartment': ['1 BHK', '2 BHK', '2.5 BHK', '3 BHK', '3.5 BHK', '4+ BHK', 'Penthouse'],
    'Villa': ['3 BHK', '4 BHK', '5 BHK', 'Villa Plot'],
    'Plot': ['Residential Plot', 'Commercial Plot', 'Agricultural Land', 'Industrial Plot'],
    'Commercial': ['Office Space', 'Shop/Retail', 'Showroom', 'Warehouse/Godown', 'Co-working', 'Industrial Shed']
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(onClose, 2000);
    }, 1500);
  };

  if (success) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
          <Send size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Property Posted!</h3>
        <p className="text-gray-500">Your listing is under review and will be live shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg mb-6 border border-green-100 dark:border-green-900/30">
        <h4 className="font-semibold text-green-800 dark:text-green-300 text-sm mb-2">Property Overview</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
            <select 
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm focus:ring-1 focus:ring-green-500 bg-none"
            >
              {Object.keys(configurations).map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
           <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Configuration</label>
            <select className="block w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm focus:ring-1 focus:ring-green-500 bg-none">
              {configurations[propertyType]?.map((config, index) => (
                <option key={index} value={config}>{config}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              required
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
              placeholder="Full Name"
            />
          </div>
        </div>
        <div>
           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
           <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              required
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
              placeholder="9876543210"
            />
          </div>
        </div>
      </div>

       <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Property Location</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            required
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
            placeholder="Search Area / Society"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expected Price</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IndianRupee className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            required
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
            placeholder="e.g. 7500000"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1 text-right">We don't charge brokerage from you.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Property Media (Optional)</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center cursor-pointer">
            <input type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" multiple />
            <div className="flex flex-col items-center gap-1">
              <Image className="h-6 w-6 text-gray-400" />
              <span className="text-xs text-gray-500">Upload Images</span>
            </div>
          </div>
          <div className="relative border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center cursor-pointer">
            <input type="file" accept="video/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            <div className="flex flex-col items-center gap-1">
              <Video className="h-6 w-6 text-gray-400" />
              <span className="text-xs text-gray-500">Upload Video</span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 mt-4 shadow-lg hover:shadow-green-600/25"
      >
        {loading ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <>
            Post Property for Free
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
};

export default OwnerForm;
