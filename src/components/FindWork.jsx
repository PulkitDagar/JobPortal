import React from 'react';
import photo1 from "../assets/photo1.jpg";
import { useNavigate } from "react-router-dom";

const FindWork = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
                {/* Left Section: Content */}
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">
                        Find work that works for you
                    </h1>
                    <p className="text-gray-600 text-lg font-medium">
                        A personalized and private job search, with
                    </p>
                    <p className="text-gray-600 text-lg font-medium mb-6">
                        all the info you care about, all upfront.
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
                                <h3 className="font-bold text-gray-800">Stay in the know</h3>
                                <p className="text-gray-600 font-medium">
                                    No guessing games. View salary and stock options
                                </p>
                                <p className="text-gray-600 font-medium">
                                    before you apply.
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
                                <h3 className="font-bold text-gray-800">Personalized search</h3>
                                <p className="text-gray-600 font-medium">
                                    Personalized filters make it quick and easy to find the jobs you care about.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full">
                                    <span className="text-blue-500 text-xl">🌟</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">Unique roles, exciting teams</h3>
                                <p className="text-gray-600 font-medium">
                                    Discover unique jobs with future-defining teams.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <button onClick={()=> {navigate("/signup")}} className="mt-6 px-6 py-3 bg-gray-900 text-white font-medium rounded-full shadow-md hover:bg-gray-800 transition">
                        Browse Jobs
                    </button>
                </div>

                {/* Right Section: Image */}
                <div className="flex-shrink-0 w-full ml-10 md:w-1/2">
                    <img
                        src={photo1}
                        alt="Sit back and let the opportunities come to you"
                        className="w-full h-auto transform scale-110"
                    />
                </div>
            </div>
        </div>
    );
};

export default FindWork;


