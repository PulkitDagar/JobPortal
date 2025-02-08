import React from "react";

const questions = [
  {
    question: "What is your role?",
    options: ["Founder / CEO", "Hiring Manager", "HR", "Recruiting Agent", "Other"],
  },
  {
    question: "What is your hiring goal?",
    options: ["Hire ASAP", "Build a talent pool", "Find freelancers", "I'm just exploring"],
  },
  {
    question: "How big is your company?",
    options: ["1-10", "11-50", "51-200", "201-500", "500+"],
  },
  {
    question: "What type of talent are you looking for?",
    options: ["Developers", "Designers", "Marketers", "Sales", "Other"],
  },
  {
    question: "Do you have an existing hiring platform?",
    options: ["Yes", "No", "Not sure"],
  },
  {
    question: "What is your preferred recruitment method?",
    options: ["Job boards", "Social media", "Referrals", "Recruitment agencies", "Other"],
  },
];

const Solution = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6 md:p-12 lg:p-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
          Our Expert Questions
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Discover the insights behind every decision with our carefully crafted questions,
          designed to guide you through a modern experience.
        </p>
      </div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {questions.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {item.question}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </div>
            <div className="space-y-2">
              {item.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 bg-gray-50 rounded-md border border-gray-200 transition transform hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{option}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solution;

