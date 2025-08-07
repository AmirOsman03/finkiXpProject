import React from "react";
import {FaUserCircle, FaMedal, FaTrophy} from "react-icons/fa";
import {GiLevelEndFlag} from "react-icons/gi";
import CountUp from "react-countup";
import useUserDetails from "../../../hooks/useUserDetails.js";

const MePage = () => {
    const user = useUserDetails();

    if (!user || !user.username) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-indigo-100 to-purple-200">
                <div className="bg-white shadow-md rounded-xl px-6 py-8 text-center">
                    <h1 className="text-2xl font-semibold text-red-600 mb-4">🚫 No user logged in</h1>
                    <p className="text-gray-600">Please log in to view your profile.</p>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-100 to-purple-200 py-10 px-6 flex flex-col items-center">
            <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8 space-y-6">
                <div className="flex flex-col items-center">
                    <FaUserCircle className="text-7xl text-purple-500 mb-2"/>
                    <h1 className="text-3xl font-bold text-gray-800">@{user.username}</h1>
                </div>

                <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="bg-purple-100 rounded-xl p-5">
                        <h2 className="text-lg font-semibold text-purple-700 flex items-center justify-center gap-2">
                            <GiLevelEndFlag/>
                            Level
                        </h2>
                        <p className="text-4xl font-bold text-purple-900">{user.level}</p>
                    </div>
                    <div className="bg-indigo-100 rounded-xl p-5">
                        <h2 className="text-lg font-semibold text-indigo-700 flex items-center justify-center gap-2">
                            <FaTrophy/>
                            XP
                        </h2>
                        <p className="text-4xl font-bold text-indigo-900">
                            <CountUp end={user.xp} duration={2}/>
                        </p>
                    </div>
                </div>

                <div className="pt-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaMedal className="text-yellow-500"/>
                        Achievements
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default MePage;
