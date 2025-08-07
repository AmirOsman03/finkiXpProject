import React from 'react';
import useTaskDetails from "/src/hooks/useTaskDetails.js";
import {FaBook, FaRegStar, FaRegListAlt, FaPlay} from 'react-icons/fa';
import {MdOutlineDescription} from 'react-icons/md';
import {useParams} from "react-router";
import Breadcrumb from "../../Layout/Breadcrumb/Breadcrump.jsx";
import {SiLevelsdotfyi} from "react-icons/si";

const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Tasks", to: "/tasks" },
    { label: "Task Details" }
];

const TaskDetails = () => {
    const {id} = useParams();
    const {task, loading} = useTaskDetails(id);

    // Difficulty configuration
    const difficultyConfig = {
        EASY: {
            bg: 'bg-gradient-to-r from-green-100 to-green-300',
            text: 'text-green-800',
            icon: 'text-green-600'
        },
        MEDIUM: {
            bg: 'bg-gradient-to-r from-yellow-100 to-yellow-300',
            text: 'text-yellow-800',
            icon: 'text-yellow-600'
        },
        HARD: {
            bg: 'bg-gradient-to-r from-red-100 to-red-300',
            text: 'text-red-800',
            icon: 'text-red-600'
        },
        default: {
            bg: 'bg-gradient-to-r from-gray-100 to-gray-300',
            text: 'text-gray-800',
            icon: 'text-gray-600'
        }
    };

    const difficulty = task?.difficulty || 'Unknown';
    const difficultyStyle = difficultyConfig[difficulty] || difficultyConfig.default;

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[40vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"/>
            </div>
        );
    }

    if (!task) {
        return <div className="text-center text-gray-500 py-20">Task not found.</div>;
    }

    return (
        <div className={"my-5 mb-10"}>
            <div className="container mx-auto px-5">
                <Breadcrumb items={breadcrumbItems} />
            </div>
            <div className="flex items-center justify-center px-2">
                <div className="w-full max-w-2xl bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 animate-fade-in border border-white/40 relative overflow-hidden">
                    {/* Decorative gradient blob */}
                    <div className="absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-br from-purple-300 to-blue-200 opacity-30 rounded-full blur-2xl z-0"/>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <FaRegListAlt className="text-4xl text-blue-700 drop-shadow"/>
                            <h1 className="text-4xl font-extrabold text-blue-900 drop-shadow-lg tracking-tight">
                                {task.name}
                            </h1>
                        </div>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full shadow text-blue-900 font-semibold">
                                <FaBook className="text-blue-600"/>
                                <span>{task.subject}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-200 to-purple-400 rounded-full shadow text-purple-900 font-semibold">
                                <FaRegStar className="text-purple-600"/>
                                <span>{task.xp} XP</span>
                            </div>
                            <div className={`flex items-center gap-2 px-4 py-2 ${difficultyStyle.bg} rounded-full shadow font-semibold ${difficultyStyle.text}`}>
                                <SiLevelsdotfyi className={difficultyStyle.icon}/>
                                <span>{difficulty}</span>
                            </div>
                        </div>
                        <hr className="my-6 border-blue-100"/>
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <MdOutlineDescription className="text-2xl text-gray-500"/>
                                <span className="text-xl font-semibold text-gray-700">Опис</span>
                            </div>
                            <p className="text-gray-700">{task.description}</p>
                        </div>
                    </div>
                    <a
                        href={"/"}
                        className="flex items-center justify-center gap-2 px-8 py-3 mt-5 bg-gradient-to-r from-green-600 to-emerald-400 text-white rounded-full shadow-lg hover:scale-105 hover:from-green-700 hover:to-emerald-500 transition-all duration-200 text-lg font-semibold"
                    >
                        <FaPlay/>
                        Почни
                    </a>
                </div>

                <style>{`
                @keyframes fade-in {
                  from { opacity: 0; transform: translateY(30px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both; }
              `}</style>
            </div>
        </div>
    );
};

export default TaskDetails;