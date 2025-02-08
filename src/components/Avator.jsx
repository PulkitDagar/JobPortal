import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Avator() {
    const [isSearching, setIsSearching] = useState(true);
    const navigate = useNavigate();


    return (
        <div className="min-h-screen bg-[rgb(133,82,175)] p-4 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 max-w-xl">
                <div className="bg-[#E93D82] text-white px-4 py-1 rounded-full w-fit text-sm mb-6">
                    Early Access
                </div>

                <h1 className="text-4xl md:text-5xl text-white font-bold mb-4 font-mono">
                    Meet JobFinder:ai
                </h1>
                <h2 className="text-2xl  text-white md:text-3xl font-bold mb-6 font-mono">
                    JobFinder's AI recruiter.
                </h2>

                <p className="text-gray-300 mb-4">
                    Here to help with all the logistics. jobfinder:ai finds best fit candidates, vets for interest, and schedules your favorites on your calendar — all in a matter of days.
                </p>
                <p className="text-gray-300 italic mb-6">
                    It's that easy.
                </p>

                <button onClick={ () => navigate("/companies")} className="bg-white text-[#1B1B1B]  text-1xl px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                    Learn more
                </button>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 max-w-xl">
                <div className="bg-[#2B2B2B] rounded-2xl p-6 shadow-lg relative">
                    {/* Chat Interface */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0">
                            <div className="relative">
                                <img src="https://i.pravatar.cc/150?img=4" alt="Recruiter" className="w-10 h-10 rounded-full border-2 border-[#3B3B3B]" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#2B2B2B]"></div>
                            </div>
                        </div>
                        <div className="bg-white text-[#1B1B1B] p-3 rounded-2xl max-w-[80%] whitespace-nowrap">
                            <p className='text-2xl font-bold'>We are <span className="bg-[#FFE5BA] px-2 py-0.5 rounded">HIRING!</span> </p>
                        </div>
                    </div>

                    {/* Response */}
                    <div className="flex items-start gap-4">
                        <div className="flex-1">
                            <div className="bg-[#3B3B3B] p-4 rounded-2xl">
                                <div className="text-white">
                                    {isSearching ? (
                                        <div className="flex flex-col items-center space-y-4">
                                            <p className="text-center bg-[#E93D82] px-4 py-2 rounded-2xl">... Sending you a list of relevant candidates now.</p>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-[#E93D82] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                                <div className="w-2 h-2 bg-[#E93D82] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                <div className="w-2 h-2 bg-[#E93D82] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                            </div>
                                            <div className="relative w-full h-12">
                                                <div className="absolute left-1/2 transform -translate-x-1/2 flex -space-x-3">
                                                    {[...Array(8)].map((_, i) => (
                                                        <img
                                                            key={i}
                                                            src={`https://i.pravatar.cc/150?img=${i + 5}`}
                                                            alt=""
                                                            className="w-8 h-8 rounded-full border-2 border-[#3B3B3B]"
                                                            style={{
                                                                animation: `float 3s ease-in-out infinite`,
                                                                animationDelay: `${i * 0.2}s`
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-400">searching...</p>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Avator;