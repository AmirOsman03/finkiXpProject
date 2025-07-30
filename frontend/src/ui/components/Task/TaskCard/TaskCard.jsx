import React from 'react';
import {useNavigate} from "react-router";
import {FaBook, FaRegStar} from 'react-icons/fa';


const TaskCard = ({task}) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate("/tasks/" + id);
    };

    if (!task) return null;

    return (
        <div
            onClick={() => handleClick(task.id)}
            className="group bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col border border-white/40 relative overflow-hidden hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-100"
        >
            {/* Decorative gradient blob */}
            <div
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 opacity-20 rounded-full blur-2xl z-0"/>
            <div className="p-5 flex flex-col flex-1 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                    <FaBook className="text-blue-400 text-base"/>
                    <span className="text-xs text-blue-700 font-semibold truncate">{task.subject}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 truncate drop-shadow-sm">
                    {task.name}
                </h3>
                <div className="flex gap-2 mt-auto">
                    <div
                        className="flex items-center gap-1 py-1 bg-purple-50 rounded-full text-xs font-medium text-purple-700">
                        <FaRegStar className="text-purple-400 text-lg"/>
                        {task.points} XP
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;