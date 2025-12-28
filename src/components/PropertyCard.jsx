import React from 'react';
import { MapPin, Video, Camera, Star, Bath, BedDouble, LayoutDashboard, UserCircle, Eye, Share2, Plus, Heart } from 'lucide-react';

const PropertyCard = ({ item, handleViewDetails }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`${i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"} w-3 h-3 sm:w-3.5 sm:h-3.5`}
      />
    ));
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
    >
      <div
        className="bg-cover bg-center h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[250px] rounded-xl p-3 sm:p-4 flex flex-col justify-between relative cursor-pointer"
        style={{ backgroundImage: `url(${item.images})` }}
        onClick={() => handleViewDetails(item)}
      >
        <div className="flex justify-between items-start">
          {item.featured && (
            <button className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[10px] sm:text-xs md:text-[13px] font-semibold">
              Featured
            </button>
          )}
          <div className="flex gap-1.5 sm:gap-2">
            <button className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[10px] sm:text-xs md:text-[13px] whitespace-nowrap">
              {item.status}
            </button>
            <button className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[10px] sm:text-xs md:text-[13px] whitespace-nowrap">
              {item.type}
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 sm:gap-0">
          <div className="flex items-center gap-1.5 sm:gap-2 text-white">
            <MapPin className="text-sm sm:text-base lg:text-lg flex-shrink-0" />
            <span className="text-xs sm:text-sm truncate">{item.address}</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-white">
            <Video className="text-sm sm:text-base lg:text-lg cursor-pointer hover:text-green-400 transition-colors flex-shrink-0" />
            <Camera className="text-sm sm:text-base lg:text-lg cursor-pointer hover:text-green-400 transition-colors flex-shrink-0" />
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-2 sm:gap-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
          <h1 className="text-lg sm:text-xl font-semibold line-clamp-2 cursor-pointer hover:text-green-600 transition-colors" onClick={() => handleViewDetails(item)}>{item.name}</h1>
          <div className="flex items-center gap-1 flex-shrink-0">
            {renderStars(item.rating)}
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 ml-1">
              ({item.rating})
            </span>
          </div>
        </div>
        
        <h1 className="text-xl sm:text-2xl text-green-600 font-bold">{item.price}</h1>
        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm line-clamp-2">{item.about}</p>

        <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-3">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Bath className="text-green-500 text-sm sm:text-base lg:text-lg flex-shrink-0" />
            <span className="text-xs sm:text-sm">{item.bath} Bath</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <BedDouble className="text-green-500 text-sm sm:text-base lg:text-lg flex-shrink-0" />
            <span className="text-xs sm:text-sm">{item.bed} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <LayoutDashboard className="text-green-500 text-sm sm:text-base lg:text-lg flex-shrink-0" />
            <span className="text-xs sm:text-sm">{item.area}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
          {item.amenities.slice(0, 3).map((amenity, idx) => (
            <span key={idx} className="px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
              {amenity}
            </span>
          ))}
          {item.amenities.length > 3 && (
            <span className="px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
              +{item.amenities.length - 3} more
            </span>
          )}
        </div>

        <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-700 my-3 sm:my-4"></div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <UserCircle className="text-green-500 text-sm sm:text-base lg:text-lg flex-shrink-0" />
            <span className="text-xs sm:text-sm truncate">{item.owner}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            <Eye className="text-green-500 text-sm sm:text-base flex-shrink-0" />
            <span>{item.views.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mt-3 sm:mt-4">
          <button 
            onClick={() => handleViewDetails(item)}
            className="bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-xs sm:text-sm font-semibold w-full sm:w-auto"
          >
            View Details
          </button>
          <div className="flex gap-2 justify-center sm:justify-end">
            <div className="p-1.5 sm:p-2 border-2 border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition hover:scale-110">
              <Share2 className="text-green-500 text-sm sm:text-base" />
            </div>
            <div className="p-1.5 sm:p-2 border-2 border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition hover:scale-110">
              <Heart className="text-green-500 text-sm sm:text-base" />
            </div>
            <div className="p-1.5 sm:p-2 border-2 border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition hover:scale-110">
              <Plus className="text-green-500 text-sm sm:text-base" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
