import React from "react";
import photo2 from "../assets/photo2.jpg"

const CompaniesSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
            <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center">
                {/* Left Side: Text and Call-to-Action */}
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
                        Accelerate Your Hiring Process
                    </h2>
                    <p className="mt-4 text-lg lg:text-xl text-gray-700">
                        Discover the power of our innovative platform—designed exclusively for companies to connect with exceptional talent. Streamline recruitment, drive growth, and make data-driven decisions with ease.
                    </p>
                    <div className="mt-8 flex space-x-4">
                        <a
                            href="/signup"
                            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-300"
                        >
                            Get Started
                        </a>
                        <a
                            href="/signup"
                            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md shadow hover:bg-blue-50 transition duration-300"
                        >
                            Hire Talent
                        </a>
                    </div>
                </div>
                {/* Right Side: Illustrative Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={photo2}
                        alt="Hiring illustration"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-16">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Curated Candidates",
                                description: "Access top talent handpicked to match your needs.",
                                icon: (
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                ),
                            },
                            {
                                title: "Streamlined Process",
                                description: "Simplify hiring with our efficient, all-in-one platform.",
                                icon: (
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l9 6 9-6M3 17l9 6 9-6"></path>
                                    </svg>
                                ),
                            },
                            {
                                title: "Data-Driven Insights",
                                description: "Leverage analytics to make informed hiring decisions.",
                                icon: (
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 11V3H9v8H3v2h6v8h2v-8h6v-2h-6z"></path>
                                    </svg>
                                ),
                            },
                            {
                                title: "Scalable Solutions",
                                description: "Grow your team effortlessly as your company evolves.",
                                icon: (
                                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                ),
                            },
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="mt-2 text-gray-700">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompaniesSection;
