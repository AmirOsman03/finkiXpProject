import React from 'react';
import useLeaderboard from "../../../hooks/useLeaderboard.js";
import Leaderboard from "../../components/Leaderboard/Leaderboard.jsx";

const LeaderboardPage = () => {
    const {users, loading} = useLeaderboard();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[40vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600" />
            </div>
        );
    }

    return (
        <div className={"mx-auto"}>
            <Leaderboard
                users={users}
            />
        </div>
    );
};

export default LeaderboardPage;