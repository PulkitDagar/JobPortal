import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMoneyBillWave,
  faSmile,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const WhyLoveUs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-green-700 text-sm font-semibold">Got talent?</h3>
            <h2 className="text-2xl font-bold mt-2 mb-6">Why job seekers love us</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faBriefcase} className="text-pink-500 w-6 h-6 mt-1" />
                <p className="ml-4 text-gray-700">
                  Connect directly with founders at top startups - no third-party recruiters allowed.
                </p>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMoneyBillWave} className="text-pink-500 w-6 h-6 mt-1" />
                <p className="ml-4 text-gray-700">
                  Everything you need to know, all upfront. View salary, stock options, and more before applying.
                </p>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faSmile} className="text-pink-500 w-6 h-6 mt-1" />
                <p className="ml-4 text-gray-700">
                  Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.
                </p>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faStar} className="text-pink-500 w-6 h-6 mt-1" />
                <p className="ml-4 text-gray-700">
                  Unique jobs at startups and tech companies you can’t find anywhere else.
                </p>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <button
                onClick={() => navigate("/jobseekers")}
                className="px-4 py-2 border border-gray-700 text-gray-700 rounded-md hover:bg-gray-100"
              >
                Learn more
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-pink-50 p-6 shadow-md rounded-lg">
            <h3 className="text-pink-700 text-sm font-semibold">Need talent?</h3>
            <h2 className="text-2xl font-bold mt-2 mb-6">Why recruiters love us</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faBriefcase} className="text-pink-500 w-6 h-6 mt-1" />
                <p className="ml-4 text-gray-700">
                  Tap into a community of 10M+ engaged, startup-ready candidates.
                </p>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMoneyBillWave} className="text-pink-500 w-6 h-6 mt-1" />
                <p className="ml-4 text-gray-700">
                  Everything you need to kickstart your recruiting — set up job posts, company branding, and HR tools within 10 minutes, all for free.
                </p>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faSmile} className="text-pink-500 w-6 h-6 mt-1" />
                <p className="ml-4 text-gray-700">
                  A free applicant tracking system, or free integration with any ATS you may already use.
                </p>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faStar} className="text-pink-500 w-6 h-6 mt-1" />
                <p className="ml-4 text-gray-700">
                  Let us handle the heavy-lifting with RecruiterCloud. Our new AI-Recruiter scans 500M+ candidates, filters it down based on your unique calibration, and schedules your favorites on your calendar in a matter of days.
                </p>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <button
                onClick={() => navigate("/companies")}
                className="px-4 py-2 border border-gray-700 text-gray-700 rounded-md hover:bg-gray-100"
              >
                Learn more
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLoveUs;


