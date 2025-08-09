import React from 'react';
import useLeaderboard from "../../../hooks/useLeaderboard.js";
import { FaCrown, FaTrophy, FaMedal, FaFire, FaUserAlt } from "react-icons/fa";
import { GiLaurelsTrophy, GiPodiumWinner } from "react-icons/gi";

const Leaderboard = () => {
    const {users, loading} = useLeaderboard();

    const getRankIcon = (index) => {
        if (index === 0) return <FaCrown className="text-3xl text-yellow-400" />;
        if (index === 1) return <FaTrophy className="text-3xl text-gray-300" />;
        if (index === 2) return <FaMedal className="text-3xl text-orange-400" />;
        return <span className="text-xl font-bold">{index + 1}</span>;
    };

    const getRankClass = (index) => {
        if (index === 0) return 'bg-gradient-to-b from-yellow-500/10 to-yellow-500/5 border-2 border-yellow-500/30 shadow-lg shadow-yellow-500/10';
        if (index === 1) return 'bg-gradient-to-b from-gray-500/10 to-gray-500/5 border-2 border-gray-500/30 shadow-lg shadow-gray-500/10';
        if (index === 2) return 'bg-gradient-to-b from-orange-500/10 to-orange-500/5 border-2 border-orange-500/30 shadow-lg shadow-orange-500/10';
        return 'bg-gray-900/5 border border-gray-800/10 hover:bg-gray-900/10';
    };

    const getPodiumClass = (index) => {
        if (index === 0) return 'h-48 bg-gradient-to-b from-yellow-500 to-yellow-600 shadow-lg shadow-yellow-500/30';
        if (index === 1) return 'h-40 bg-gradient-to-b from-gray-400 to-gray-500 shadow-lg shadow-gray-500/30';
        if (index === 2) return 'h-32 bg-gradient-to-b from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30';
        return '';
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900 p-4">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-500/20 p-8 w-full max-w-4xl animate-fade-in">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-purple-400 mb-2 flex items-center justify-center gap-3">
                            <GiLaurelsTrophy className="text-4xl" />
                            <span>Leaderboard</span>
                        </h1>
                        <p className="text-gray-400">Loading rankings...</p>
                    </div>
                    <div className="flex justify-center items-center py-12">
                        <div className="w-12 h-12 border-4 border-gray-700 border-t-purple-500 rounded-full animate-spin"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 p-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-500/20 p-8 animate-fade-in">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                            <GiLaurelsTrophy className="text-5xl text-purple-400" />
                            <span>Leaderboard</span>
                        </h1>
                        <p className="text-gray-400">Top performers this week</p>
                    </div>

                    {/* Podium for Top 3 */}
                    {users.length > 0 && (
                        <div className="flex justify-center items-end gap-4 mb-16 px-4">
                            {/* 2nd Place */}
                            {users[1] && (
                                <div className="flex-1 max-w-xs">
                                    <div className={`${getPodiumClass(1)} rounded-t-2xl flex flex-col items-center justify-end pb-4 relative`}>
                                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-700 border-2 border-gray-500 rounded-full w-12 h-12 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-white">2</span>
                                        </div>
                                        <div className="bg-gray-800 border-2 border-gray-600 rounded-full p-2 mb-2">
                                            <FaUserAlt className="text-2xl text-gray-300" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white">{users[1].username}</h3>
                                        <p className="text-sm text-gray-300">{users[1].xpPoints || 0} XP</p>
                                    </div>
                                </div>
                            )}

                            {/* 1st Place */}
                            {users[0] && (
                                <div className="flex-1 max-w-xs">
                                    <div className={`${getPodiumClass(0)} rounded-t-2xl flex flex-col items-center justify-end pb-6 relative`}>
                                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-600 border-2 border-yellow-400 rounded-full w-14 h-14 flex items-center justify-center">
                                            <FaCrown className="text-2xl text-yellow-200" />
                                        </div>
                                        <div className="bg-gray-800 border-2 border-yellow-400 rounded-full p-2 mb-2">
                                            <FaUserAlt className="text-2xl text-yellow-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{users[0].username}</h3>
                                        <p className="text-sm text-yellow-200">{users[0].xpPoints || 0} XP</p>
                                    </div>
                                </div>
                            )}

                            {/* 3rd Place */}
                            {users[2] && (
                                <div className="flex-1 max-w-xs">
                                    <div className={`${getPodiumClass(2)} rounded-t-2xl flex flex-col items-center justify-end pb-2 relative`}>
                                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 border-2 border-orange-400 rounded-full w-12 h-12 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-white">3</span>
                                        </div>
                                        <div className="bg-gray-800 border-2 border-orange-400 rounded-full p-2 mb-2">
                                            <FaUserAlt className="text-2xl text-orange-400" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white">{users[2].username}</h3>
                                        <p className="text-sm text-orange-200">{users[2].xpPoints || 0} XP</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Full Leaderboard List */}
                    <div className="space-y-3">
                        {users.length === 0 ? (
                            <div className="text-center py-12 text-gray-400">
                                <p>No rankings available yet</p>
                            </div>
                        ) : (
                            users.map((user, index) => (
                                <div
                                    key={user.username}
                                    className={`flex items-center justify-between p-5 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg ${getRankClass(index)}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                            index === 0 ? 'bg-yellow-500/20' :
                                                index === 1 ? 'bg-gray-500/20' :
                                                    index === 2 ? 'bg-orange-500/20' : 'bg-gray-700/50'
                                        }`}>
                                            {getRankIcon(index)}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className={`text-lg font-semibold ${
                                                index === 0 ? 'text-yellow-400' :
                                                    index === 1 ? 'text-gray-300' :
                                                        index === 2 ? 'text-orange-400' : 'text-white'
                                            }`}>
                                                {user.username}
                                            </h3>
                                            <p className="text-xs text-gray-400">{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <span className={`text-xl font-bold ${
                                                index === 0 ? 'text-yellow-400' :
                                                    index === 1 ? 'text-gray-300' :
                                                        index === 2 ? 'text-orange-400' : 'text-white'
                                            }`}>
                                                {user.xpPoints || 0}
                                            </span>
                                            <span className="text-xs text-gray-400 block">XP</span>
                                        </div>
                                        {index < 3 && (
                                            <div className={`p-2 rounded-lg ${
                                                index === 0 ? 'bg-yellow-500/20' :
                                                    index === 1 ? 'bg-gray-500/20' : 'bg-orange-500/20'
                                            }`}>
                                                <GiPodiumWinner className={`text-2xl ${
                                                    index === 0 ? 'text-yellow-400' :
                                                        index === 1 ? 'text-gray-300' : 'text-orange-400'
                                                }`} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Current User Position (mock) */}
                    {users.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-gray-700/50">
                            <div className="flex items-center justify-between p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                                        <span className="text-lg font-bold">42</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-semibold text-purple-300">Your Position</h3>
                                        <p className="text-xs text-purple-400">+5 positions this week</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-xl font-bold text-purple-300">1,245 XP</span>
                                    <span className="text-xs text-purple-400 block">2,000 XP to next rank</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;