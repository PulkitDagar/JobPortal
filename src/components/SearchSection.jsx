import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons

const SearchSection = () => {
  const experienceOptions = [
    'Fresher',
    '1 Year',
    '2 Years',
    '3 Years',
    '4 Years',
    '5+ Years',
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mt-5 text-gray-800">Where startups and job seekers connect</h1>
        <p className="text-gray-800 text-lg mt-4">5 lakh+ jobs for you to explore</p>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Skills/Designation/Companies Input */}
        <input
          type="text"
          placeholder="Enter skills / designations / companies"
          className="w-full md:flex-1 px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg "
        />
        {/* Experience Dropdown */}
        <select
          className="w-full md:flex-1 px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg "
        >
          <option value="">Select experience</option>
          {experienceOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* Location Input */}
        <input
          type="text"
          placeholder="Enter location"
          className="w-full md:flex-1 px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg "
        />
        {/* Search Button with Icon */}
        <NavLink
          to="/signup"
          className="w-full md:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-2"
        >
            <FaSearch className="text-white" />
          <span>Search</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SearchSection;


