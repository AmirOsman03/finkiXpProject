import React from 'react';
import useTaskDetails from "../../../../hooks/useTaskDetails.js";
import { FaBook, FaRegStar, FaRegListAlt } from 'react-icons/fa';
import { MdOutlineDescription, MdOutlineLeaderboard } from 'react-icons/md';

const difficultyColors = {
    Easy: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Hard: 'bg-red-100 text-red-700',
};

const TaskDetails = () => {
    const { task, loading } = useTaskDetails();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[40vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600" />
            </div>
        );
    }

    if (!task) {
        return <div className="text-center text-gray-500 py-20">Task not found.</div>;
    }

    return (
        <div className="max-w-2xl mx-auto my-12 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
                <FaRegListAlt className="text-3xl text-blue-600" />
                <h1 className="text-3xl font-extrabold text-blue-800">{task.name}</h1>
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                    <FaBook className="text-blue-500" />
                    <span className="font-medium text-blue-700">{task.subject}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                    <FaRegStar className="text-purple-500" />
                    <span className="font-medium text-purple-700">{task.points} XP</span>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDescription className="text-xl text-gray-500" />
                    <span className="text-lg font-semibold text-gray-700">Опис</span>
                </div>
                <p className="text-gray-700 bg-gray-50 rounded-xl p-4 mt-1 whitespace-pre-line">
                    {task.description}
                </p>
            </div>
        </div>
    );
};

export default TaskDetails;