import React from 'react';
import {useParams} from "react-router";
import useSubjectDetails from "../../../../hooks/useSubjectDetails.js";
import {FaGraduationCap, FaRegStar, FaBook, FaRegListAlt} from "react-icons/fa";
import {MdOutlineDescription} from "react-icons/md";

const SubjectDetails = () => {
    const {id} = useParams();
    const {subject, tasks, loading} = useSubjectDetails(id);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[40vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"/>
            </div>
        );
    }

    if (!subject) {
        return <div className="text-center text-gray-500 py-20">Subject not found.</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Subject Header */}
                <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 mb-8 border border-white/40">
                    <div className="flex items-center justify-center gap-6 mb-6">
                        <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                            <FaGraduationCap className="text-white text-3xl"/>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">{subject.name}</h1>
                        </div>
                    </div>

                    {/* Subject Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 rounded-2xl p-6 text-center">
                            <FaRegStar className="text-blue-600 text-2xl mx-auto mb-2"/>
                            <div className="text-2xl font-bold text-blue-700">{subject.totalPoints || 0}</div>
                            <div className="text-sm text-blue-600">Вкупно XP</div>
                        </div>
                        <div className="bg-green-50 rounded-2xl p-6 text-center">
                            <FaBook className="text-green-600 text-2xl mx-auto mb-2"/>
                            <div className="text-2xl font-bold text-green-700">{subject.completedTasks || 0}</div>
                            <div className="text-sm text-green-600">Завршени задачи</div>
                        </div>
                        <div className="bg-purple-50 rounded-2xl p-6 text-center">
                            <FaRegListAlt className="text-purple-600 text-2xl mx-auto mb-2"/>
                            <div className="text-2xl font-bold text-purple-700">{tasks?.length || 0}</div>
                            <div className="text-sm text-purple-600">Вкупно задачи</div>
                        </div>
                    </div>
                </div>

                {/* Tasks Section */}
                <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/40">
                    <div className="flex items-center gap-3 mb-6">
                        <MdOutlineDescription className="text-2xl text-gray-600"/>
                        <h2 className="text-2xl font-bold text-gray-900">Задачи</h2>
                    </div>

                    {tasks && tasks.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tasks.map((task) => (
                                <div key={task.id}
                                     className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/40 hover:scale-105">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                                {task.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 line-clamp-3">
                                                {task.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                                {task.points} XP
                                            </span>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                task.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                                                    task.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                                        'bg-red-100 text-red-700'
                                            }`}>
                                                {task.difficulty}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <FaRegListAlt className="text-gray-400 text-4xl mx-auto mb-4"/>
                            <p className="text-gray-500 text-lg">Нема задачи за овој предмет</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubjectDetails;