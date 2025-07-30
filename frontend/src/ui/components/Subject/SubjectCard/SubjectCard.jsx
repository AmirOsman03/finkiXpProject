import React from 'react';
import {useNavigate} from "react-router";
import {FaBook, FaRegStar, FaGraduationCap} from "react-icons/fa";

const SubjectCard = ({subject}) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate("/subject/" + id);
    };

    if (!subject) return null;

    return (
        <div
            onClick={() => handleClick(subject.id)}
            className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer flex flex-col border border-white/50 relative overflow-hidden hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-100"
        >
            {/* Animated gradient background */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/20 to-pink-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

            {/* Decorative gradient blob */}
            <div
                className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-purple-300 to-blue-300 opacity-20 rounded-full blur-3xl z-0 group-hover:opacity-30 transition-opacity duration-500"/>

            <div className="p-6 flex flex-col flex-1 relative z-10">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                    <div
                        className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <FaGraduationCap className="text-white text-2xl"/>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-800 transition-colors duration-300">
                            {subject.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                            {subject.taskCount || 0} задачи
                        </p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-gray-600">Напредок</span>
                        <span className="text-xs font-bold text-blue-600">
                            {subject.completedTasks || 0}/{subject.taskCount || 0}
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                            style={{
                                width: `${subject.taskCount ? (subject.completedTasks || 0) / subject.taskCount * 100 : 0}%`
                            }}
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="flex gap-3 mt-auto">
                    <div
                        className="flex items-center gap-1 px-3 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-700">
                        <FaRegStar className="text-blue-500 text-sm"/>
                        {subject.totalPoints || 0} XP
                    </div>
                    <div
                        className="flex items-center gap-1 px-3 py-1 bg-green-50 rounded-full text-xs font-medium text-green-700">
                        <FaBook className="text-green-500 text-sm"/>
                        {subject.completedTasks || 0} завршени
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubjectCard;