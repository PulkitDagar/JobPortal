import React from "react";
import { NavLink } from "react-router-dom";




const Navbar = () => {
  return (
    <>
    
      <nav className="bg-white sticky top-0 z-50  border-gray-300 shadow-md">
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-900">
              JobFinder
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <ul className="flex items-center space-x-10">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-900 font-semibold border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900 font-medium"
                  }
                >
                  Discover
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jobseekers"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-900 font-semibold border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900 font-medium"
                  }
                >
                  For Job Seekers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/companies"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-900 font-semibold border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900 font-medium"
                  }
                >
                  For Companies
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <NavLink
              to="/login"
              className="px-5 py-2 text-sm text-black border border-gray-300 rounded-full hover:bg-gray-200 hover:text-gray-800 transition-all duration-300 ease-in-out"
            >
              Log In
            </NavLink>
            <NavLink
              to="/signup"
              className="px-5 py-2 text-sm bg-black text-white rounded-full hover:bg-red-700 transition-all duration-300 ease-in-out"
            >
              Sign Up
            </NavLink>
          </div>

        </div>
      </nav>


    </>
    
  );
};

export default Navbar;
