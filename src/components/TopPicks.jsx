import React from "react";
import { useNavigate } from "react-router-dom";

const TopPicks = () => {

    const navigate = useNavigate();
  return (
    <div className="bg-gray-900 mt-3 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-center gap-8">
        {/* Hexagon Badge Section */}
        <div className="relative w-70 h-58 flex items-center justify-center shadow-lg">
          <div
            className="absolute inset-0"
            style={{
              clipPath:
                "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
              backgroundColor: "white",
            }}
          ></div>
          <div className="relative z-10 text-center">
            <h3 className="text-gray-800 font-semibold text-m">JobFinder <span className="text-red-500">:</span></h3>
            <h1 className="text-red-500 font-bold text-5xl mt-2">
              10 <span className="text-gray-800">OF</span> 10
            </h1>
            <p className="text-gray-800 text-lg mt-1">
              IN <span className="font-bold">2025</span>
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center ml-50 md:text-left">
          <h1 className="text-3xl font-bold mb-4">Our top picks for 2025 are here!</h1>
          <p className="text-gray-300 font-bold mb-1">
            JobFinder has selected 10 startups across 10 trending industries that
          </p>
          <p className="text-gray-300 mb-1 font-bold">
            should be on your radar in 2025. See what teams our community is</p> <p className="text-gray-300 mb-4 font-bold"> most
            excited about in the year ahead!
          </p>
          <button onClick={ ()=> {navigate("/signup")}} className="px-6 py-3 bg-white text-gray-900 font-medium rounded-full shadow-md hover:bg-gray-100 transition">
            Explore our 10 of 10
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;


