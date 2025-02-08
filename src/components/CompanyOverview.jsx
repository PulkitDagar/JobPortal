import React from "react";
import { useNavigate } from "react-router-dom";

const CompanyOverview = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center text-center p-6 md:p-12 lg:p-16">
            <p className="text-sm md:text-base font-semibold text-pink-600 tracking-wide">
                For Startups & Enterprises Alike
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mt-3">
                The all-in-one platform to <br className="hidden md:block" />
                <span className="italic">find, connect & hire</span> your team
            </h1>
            <p className="text-xs md:text-sm font-semibold text-pink-600 mt-4">
                GET STARTED IN 10 MINUTES OR LESS
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
                <button onClick={() => navigate("/signup")} className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-md">
                    Sign up now
                </button>
                <button onClick={() => navigate("/signup")} className="border border-gray-400 text-gray-900 font-semibold px-6 py-3 rounded-md">
                    Explore Features
                </button>
            </div>
        </div>
    );
};

export default CompanyOverview;
