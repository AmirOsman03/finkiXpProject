import React from "react";
import {FaUserCircle, FaTrophy, FaStar, FaFire} from "react-icons/fa";
import {GiLevelEndFlag, GiSwordman, GiAchievement} from "react-icons/gi";
import {RiSwordFill} from "react-icons/ri";
import CountUp from "react-countup";
import useUserDetails from "../../../hooks/useUserDetails.js";

const MePage = () => {
    const user = useUserDetails();

    if (!user || !user.username) {
        return (
            <div
                className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900">
                <div className="bg-gray-800 shadow-lg rounded-xl px-8 py-10 text-center border border-purple-500/20">
                    <h1 className="text-2xl font-bold text-purple-400 mb-4">🔒 Access Restricted</h1>
                    <p className="text-gray-400">Please log in to view your gaming profile</p>
                    <button
                        className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition-all">
                        Login Now
                    </button>
                </div>
            </div>
        );
    }

    // Mock achievements data
    const achievements = [
        {id: 1, name: "First Blood", icon: <RiSwordFill className="text-red-500"/>, unlocked: true},
        {id: 2, name: "Level 5 Warrior", icon: <GiSwordman className="text-blue-400"/>, unlocked: true},
        {id: 3, name: "100 XP Master", icon: <FaStar className="text-yellow-400"/>, unlocked: true},
        {id: 4, name: "Streak Champion", icon: <FaFire className="text-orange-500"/>, unlocked: false},
        {id: 5, name: "Elite Player", icon: <FaTrophy className="text-purple-400"/>, unlocked: false},
    ];

    // Calculate progress to next level (mock calculation)
    const progressPercentage = Math.min(100, Math.floor((user.xpPoints / 100) * 100));

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                {/* Profile Header with Neon Effect */}
                <div
                    className="relative bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-purple-500/30 mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent"></div>
                    <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
                        <div className="relative">
                            <FaUserCircle className="text-8xl text-purple-400"/>
                            <div className="absolute -bottom-2 -right-2 bg-purple-600 rounded-full p-1">
                                <span className="text-xs font-bold text-white px-2">LVL {user.level}</span>
                            </div>
                        </div>
                        <div className="text-center sm:text-left">
                            <h1 className="text-3xl font-bold text-white mb-1">@{user.username}</h1>
                            <p className="text-purple-300 mb-4">Digital Adventurer</p>
                            <div className="flex gap-4 justify-center sm:justify-start">
                                <span className="flex items-center text-yellow-400">
                                    <FaStar className="mr-1"/> 245
                                </span>
                                <span className="flex items-center text-red-400">
                                    <FaFire className="mr-1"/> 7-day streak
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* XP Card */}
                    <div
                        className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
                                <GiLevelEndFlag className="text-purple-400"/> XP Points
                            </h3>
                            <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">
                                LEVEL {user.level}
                            </span>
                        </div>
                        <div className="text-3xl font-bold text-white mb-3">
                            <CountUp end={user.xpPoints} duration={2} separator=","/>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div
                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                                style={{width: `${progressPercentage}%`}}
                            ></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                            {100 - user.xpPoints} XP needed for next level
                        </p>
                    </div>

                    {/* Streak Card */}
                    <div
                        className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                        <h3 className="text-lg font-semibold text-blue-300 flex items-center gap-2 mb-4">
                            <FaFire className="text-orange-400"/> Current Streak
                        </h3>
                        <div className="text-3xl font-bold text-white mb-2">7 days</div>
                        <div className="flex gap-1">
                            {[...Array(7)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-2 flex-1 rounded-full ${i < 5 ? 'bg-blue-500' : 'bg-blue-500/30'}`}
                                ></div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                            Keep going! 3 more days for bonus XP
                        </p>
                    </div>

                    {/* Leaderboard Card */}
                    <div
                        className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                        <h3 className="text-lg font-semibold text-yellow-300 flex items-center gap-2 mb-4">
                            <FaTrophy className="text-yellow-400"/> Global Rank
                        </h3>
                        <div className="text-3xl font-bold text-white mb-2">#1,245</div>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-700 rounded-full h-2.5">
                                <div className="bg-gradient-to-r from-yellow-500 to-amber-500 h-2.5 rounded-full"
                                     style={{width: '65%'}}></div>
                            </div>
                            <span className="text-xs text-gray-400">Top 15%</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                            +32 positions this week
                        </p>
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 mb-8">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <GiAchievement className="text-2xl text-green-400"/>
                        <span>Your Achievements</span>
                        <span className="text-sm bg-green-900/50 text-green-300 px-3 py-1 rounded-full ml-auto">
                            {achievements.filter(a => a.unlocked).length}/{achievements.length} unlocked
                        </span>
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {achievements.map((achievement) => (
                            <div
                                key={achievement.id}
                                className={`p-4 rounded-lg text-center transition-all ${achievement.unlocked ?
                                    'bg-gradient-to-br from-green-900/30 to-green-800/50 border border-green-500/30 hover:border-green-500/50' :
                                    'bg-gray-700/50 border border-gray-600/20 hover:border-gray-600/40 opacity-50'}`}
                            >
                                <div className="text-3xl mb-2 flex justify-center">
                                    {achievement.icon}
                                </div>
                                <h3 className={`text-sm font-medium ${achievement.unlocked ? 'text-green-300' : 'text-gray-400'}`}>
                                    {achievement.name}
                                </h3>
                                {achievement.unlocked ? (
                                    <span className="text-xs text-green-400 mt-1 block">Unlocked!</span>
                                ) : (
                                    <span className="text-xs text-gray-500 mt-1 block">Locked</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <FaFire className="text-2xl text-pink-400"/>
                        <span>Recent Activity</span>
                    </h2>

                    <div className="space-y-4">
                        {[
                            {
                                id: 1,
                                action: "Completed 'Advanced React' challenge",
                                xp: "+50 XP",
                                time: "2 hours ago",
                                icon: "🏆"
                            },
                            {id: 2, action: "Reached 7-day streak", xp: "+100 XP", time: "1 day ago", icon: "🔥"},
                            {id: 3, action: "Level up to Level 5", xp: "", time: "2 days ago", icon: "🆙"},
                            {
                                id: 4,
                                action: "Earned 'First Blood' achievement",
                                xp: "+25 XP",
                                time: "3 days ago",
                                icon: "🛡️"
                            },
                        ].map((activity) => (
                            <div key={activity.id}
                                 className="flex items-start gap-4 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all">
                                <span className="text-2xl">{activity.icon}</span>
                                <div className="flex-1">
                                    <p className="text-white">{activity.action}</p>
                                    <p className="text-sm text-gray-400">{activity.time}</p>
                                </div>
                                {activity.xp && (
                                    <span className="text-sm bg-pink-900/50 text-pink-300 px-2 py-1 rounded">
                                        {activity.xp}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MePage;