import React from "react";
import { useNavigate } from "react-router-dom";

const BrandOpportunities = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
                {/* Left Section: Image */}
                <div className="flex-shrink-0">
                    <img
                        src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/64626a4a74818ca87606a317_Frame%20288.png"
                        alt="Profile that highlights skills and preferences."
                        className="w-full max-w-md transform scale-120"
                    />
                </div>

                {/* Right Section: Content */}
                <div className="text-center ml-30 md:text-left">
                    <h1 className="text-4xl  font-bold mb-7">
                        Brand yourself for new opportunities
                    </h1>
                    <p className="text-gray-600 font-medium text-lg mb-6">
                        Create a profile that highlights your unique skills and preferences,
                        then apply to jobs with just one click.
                    </p>

                    {/* Features */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-pink-100 flex items-center justify-center rounded-full">
                                    <span className="text-pink-500 text-xl">☝️</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">One click apply</h3>
                                <p className="text-gray-600 font-medium">
                                    Say goodbye to cover letters - your profile is all you need.
                                    One click to apply, then you're done.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-red-100 flex items-center justify-center rounded-full">
                                    <span className="text-red-500 text-xl">👁️</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">Set your preferences</h3>
                                <p className="text-gray-600 font-medium">
                                    Streamline the interview process by setting your expectations
                                    (salary, industry, culture, etc.) upfront.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <button onClick={() => {navigate("/signup")}} className="mt-6 px-6 py-3 bg-gray-900 text-white font-medium rounded-full shadow-md hover:bg-gray-800 transition">
                        Create your profile for free
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BrandOpportunities;
