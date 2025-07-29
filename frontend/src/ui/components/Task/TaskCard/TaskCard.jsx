import React from 'react';
import {useNavigate} from "react-router";

const TaskCard = ({task}) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate("/tasks/" + id);
    };

    if (!task) return null;

    return (
        <div
            onClick={() => handleClick(task.id)}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col">
            <div className="p-5 flex flex-col flex-1">
                <div className="text-sm text-gray-500 mb-1 truncate">{task.subject}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{task.name}</h3>
            </div>
        </div>
    );
};

export default TaskCard;