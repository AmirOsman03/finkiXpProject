import React from 'react';
import { FaCheckCircle, FaTrophy, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import useUserDetails from "../../../hooks/useUserDetails.js";

const CompletedPage = () => {
    const navigate = useNavigate();
    const user = useUserDetails();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-white/20">
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

                <div className="relative z-10 p-8 text-center">
                    {/* Animated checkmark */}
                    <div className="animate-bounce-in mb-6">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
                            <FaCheckCircle className="text-green-500 text-6xl" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-800 mb-3">Task Completed!</h1>
                    <p className="text-gray-600 mb-6">You've successfully finished the task and earned your reward.</p>

                    {/* XP Earned */}
                    <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-4 rounded-xl mb-6 border border-yellow-200/50">
                        <div className="flex items-center justify-center gap-3">
                            <FaTrophy className="text-yellow-500 text-2xl" />
                            <div>
                                <p className="text-sm text-yellow-700">XP Earned</p>
                            </div>
                        </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-8">
                        <div className="flex justify-between text-sm text-gray-500 mb-2">
                            <span>Level Progress</span>
                            <span>{user.level}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => navigate('/tasks')}
                            className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]"
                        >
                            Find More Tasks <FaArrowRight />
                        </button>
                        <button
                            onClick={() => navigate('/profile')}
                            className="w-full py-3 px-6 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all"
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
                .animate-bounce-in {
                    animation: bounce-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }
            `}</style>
        </div>
    );
};

export default CompletedPage;