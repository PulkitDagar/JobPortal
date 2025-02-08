import React from "react";
import { FaRocket, FaBrain, FaDna, FaLeaf, FaMobileAlt, FaShieldAlt, FaTools, FaShoppingCart, FaChalkboardTeacher, FaBuilding, FaWallet, FaHeartbeat, FaFileMedical, FaTruck, FaSmile, FaHome, FaCloud, FaEthereum } from "react-icons/fa";

const DiscoverIndustries = () => {
  const industries = [
    { icon: <FaRocket />, label: "Aerospace" },
    { icon: <FaBrain />, label: "AI/ML" },
    { icon: <FaDna />, label: "Biotech" },
    { icon: <FaLeaf />, label: "Cleantech" },
    { icon: <FaMobileAlt />, label: "Consumer" },
    { icon: <FaShieldAlt />, label: "Cyber Security" },
    { icon: <FaTools />, label: "Developer Tools" },
    { icon: <FaShoppingCart />, label: "E-commerce" },
    { icon: <FaChalkboardTeacher />, label: "Edtech" },
    { icon: <FaBuilding />, label: "Enterprise" },
    { icon: <FaWallet />, label: "Fintech" },
    { icon: <FaHeartbeat />, label: "Healthcare" },
    { icon: <FaFileMedical />, label: "Insurance" },
    { icon: <FaTruck />, label: "Logistics" },
    { icon: <FaSmile />, label: "Mental Health" },
    { icon: <FaHome />, label: "Real Estate" },
    { icon: <FaCloud />, label: "SaaS" },
    { icon: <FaEthereum />, label: "Web3/Crypto" },
  ];

  return (
    <div className="py-8 bg-white-50">
      <h2 className="text-2xl font-bold text-center mb-6">Discover Industries</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
          >
            <span className="text-gray-700">{industry.icon}</span>
            <span className="text-gray-700 font-medium">{industry.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverIndustries;
