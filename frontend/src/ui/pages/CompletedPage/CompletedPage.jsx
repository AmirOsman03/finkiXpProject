import React from 'react';
import { FaCheckCircle, FaTrophy, FaArrowRight, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import useUserDetails from "../../../hooks/useUserDetails.js";

const CompletedPage = () => {
    const navigate = useNavigate();
    const user = useUserDetails();

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
            {/* Main card container */}
            <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/30 relative z-10 transform transition-all duration-300 hover:shadow-3xl">
                {/* Decorative gradient elements */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-200 rounded-full opacity-10 blur-3xl -z-10"></div>
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-200 rounded-full opacity-10 blur-3xl -z-10"></div>

                <div className="p-8 text-center">
                    {/* Success icon with pulse animation */}
                    <div className="mb-8 animate-bounce-in">
                        <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-green-100 to-green-200 rounded-full shadow-inner relative">
                            <FaCheckCircle className="text-green-500 text-7xl drop-shadow-md" />
                            <div className="absolute inset-0 rounded-full border-4 border-green-300 opacity-0 animate-ping-slow" />
                        </div>
                    </div>

                    {/* Title and description */}
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
                        Task Completed!
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        You've successfully finished the task and earned your reward.
                    </p>

                    {/* XP Earned card */}
                    <div className="bg-white p-5 rounded-xl mb-8 border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full">
                                <FaTrophy className="text-yellow-500 text-3xl" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500 font-medium">XP Earned</p>
                                <p className="text-2xl font-bold text-gray-800">
                                    +{user.xpPoints || 150} XP
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Level progress */}
                    <div className="mb-8">
                        <div className="flex justify-between text-sm text-gray-500 mb-2 font-medium">
                            <span>Level {user.level}</span>
                            <span>{user.levelProgress || 65}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full relative progress-bar-fill"
                                style={{ width: `${user.levelProgress || 65}%` }}
                            >
                                <div className="absolute -right-1 -top-1 animate-pulse">
                                    <FaStar className="text-yellow-400 text-xs" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => navigate('/tasks')}
                            className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95 group"
                        >
                            <span>Find More Tasks</span>
                            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </button>
                        <button
                            onClick={() => navigate('/me')}
                            className="w-full py-3 px-6 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all hover:shadow-sm active:scale-[0.98]"
                        >
                            View Profile
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce-in {
                    0% { transform: scale(0.8); opacity: 0; }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); opacity: 1; }
                }
                @keyframes ping-slow {
                    0% { transform: scale(0.8); opacity: 0.7; }
                    70%, 100% { transform: scale(1.5); opacity: 0; }
                }

                .animate-bounce-in {
                    animation: bounce-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }
                .animate-ping-slow {
                    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                .progress-bar-fill {
                    animation: progress-fill 1s ease-out forwards;
                    --progress-width: ${user.levelProgress || 65}%;
                }
            `}</style>
        </div>
    );
};

export default CompletedPage;