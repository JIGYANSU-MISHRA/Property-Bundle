import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Home, Landmark, Briefcase, MapPin } from 'lucide-react';

const NavDropdown = ({ data, isCompact }) => {
  const [activePropertyType, setActivePropertyType] = React.useState(data?.propertyTypes?.[0] || 'Flats');

  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'flats': return <Building2 size={16} />;
      case 'houses': return <Home size={16} />;
      case 'villas': return <Landmark size={16} />;
      case 'commercial properties': return <Briefcase size={16} />;
      case 'plots': return <MapPin size={16} />;
      default: return <Home size={16} />;
    }
  };

  return (
    <div className={`absolute top-full ${isCompact ? 'left-0 w-72 mt-2 rounded-xl' : 'left-0 w-full'} bg-white dark:bg-gray-800 shadow-xl border-t border-gray-100 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}>
      <div className={isCompact ? "p-6" : "container mx-auto px-6 py-8"}>
        {data.packages ? (
          <div className="w-full max-w-sm">
            <h3 className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Packages for
            </h3>
            <ul className="space-y-4">
              {data.packages.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="block group/item">
                    <h4 className="text-gray-900 dark:text-white font-semibold text-lg hover:text-green-600 dark:hover:text-green-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {item.subtitle}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
        <div className="grid grid-cols-5 gap-8">
          {/* Property Type */}
          <div className="col-span-1 border-r border-gray-100 dark:border-gray-700 pr-6">
            <h3 className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Property Type
            </h3>
            <ul className="space-y-3">
              {data.propertyTypes.map((item, index) => (
                <li key={index} onMouseEnter={() => setActivePropertyType(item)}>
                  <Link to={`/properties?type=${item}`} className={`flex items-center gap-3 transition-colors group/item ${activePropertyType === item ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400'}`}>
                    <span className={`p-2 rounded-lg transition-colors ${activePropertyType === item ? 'bg-green-50 dark:bg-gray-700 text-green-600 dark:text-green-400' : 'bg-gray-50 dark:bg-gray-700 text-gray-400 group-hover/item:text-green-600 dark:group-hover/item:text-green-400'}`}>
                      {getIcon(item)}
                    </span>
                    <span className="font-medium">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/properties" className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-medium mt-6 text-sm">
              Explore all properties &gt;
            </Link>
          </div>

          {/* Popular Cities */}
          <div className="col-span-1">
            <h3 className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Popular Cities
            </h3>
            <ul className="space-y-2">
              {data.popularCities.map((item, index) => (
                <li key={index}>
                  <Link to={`/properties?city=${item}`} className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors block py-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Areas */}
          <div className="col-span-1">
            <h3 className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Popular Areas
            </h3>
            <ul className="space-y-2">
              {data.popularAreas.map((item, index) => (
                <li key={index}>
                  <Link to={`/properties?area=${item}`} className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors block py-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Search by BHK */}
          <div className="col-span-1">
            <h3 className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Search by BHK
            </h3>
            <ul className="space-y-2">
              {(Array.isArray(data.bhk) ? data.bhk : (data.bhk?.[activePropertyType] || [])).map((item, index) => (
                <li key={index}>
                  <Link to={`/properties?type=${activePropertyType}&bhk=${item}`} className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors block py-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Searches */}
          <div className="col-span-1 bg-gray-50 dark:bg-gray-700/50 -my-8 p-8">
            <h3 className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Popular Searches
            </h3>
            <ul className="space-y-3">
              {data.popularSearches.map((item, index) => (
                <li key={index}>
                  <Link to="/properties" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors block text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default NavDropdown;
