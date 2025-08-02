import React from 'react';
import useLeaderboard from "../../../hooks/useLeaderboard.js";

const Leaderboard = () => {
    const {users, loading} = useLeaderboard();

    const getRankIcon = (index) => {
        if (index === 0) return '🥇';
        if (index === 1) return '🥈';
        if (index === 2) return '🥉';
        return `${index + 1}`;
    };

    const getRankClass = (index) => {
        if (index === 0) return 'bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-500';
        if (index === 1) return 'bg-gradient-to-r from-gray-100 to-gray-200 border-gray-500';
        if (index === 2) return 'bg-gradient-to-r from-orange-100 to-orange-200 border-orange-500';
        return 'bg-gray-50 border-gray-200';
    };

    const getRankTextClass = (index) => {
        if (index === 0) return 'text-yellow-600';
        if (index === 1) return 'text-gray-600';
        if (index === 2) return 'text-orange-600';
        return 'text-gray-500';
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 font-sans">
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl animate-fade-in">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Leaderboard</h1>
                        <p className="text-gray-600">Loading rankings...</p>
                    </div>
                    <div className="flex justify-center items-center py-12">
                        <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center p-4 font-sans">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl animate-fade-in">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Leaderboard</h1>
                    <p className="text-gray-600">Top performers this week</p>
                </div>
                
                <div className="space-y-3">
                    {users.length === 0 ? (
                        <div className="text-center py-12 text-gray-600">
                            <p>No rankings available yet</p>
                        </div>
                    ) : (
                        users.map((user, index) => (
                            <div 
                                key={user.id} 
                                className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg ${getRankClass(index)}`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`text-2xl font-bold min-w-[40px] text-center ${getRankTextClass(index)}`}>
                                        {getRankIcon(index)}
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-semibold text-gray-900">{user.username}</h3>
                                        <p className="text-sm text-gray-600">{user.email}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-2xl font-bold text-gray-900">{user.points || 0}</span>
                                    <span className="text-xs text-gray-600 uppercase tracking-wider">points</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;