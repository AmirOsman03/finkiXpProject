import React, {useState} from 'react';
import {useNavigate} from "react-router";
import {FaBook, FaRegStar, FaGraduationCap} from "react-icons/fa";
import EditSubjectDialog from "../EditSubjectDialog/EditSubjectDialog.jsx";
import DeleteSubjectDialog from "../DeleteSubjectDialog/DeleteSubjectDialog.jsx";
import useUserDetails from "../../../../hooks/useUserDetails.js";

const SubjectCard = ({subject, onUpdate, onDelete}) => {
    const navigate = useNavigate();
    const [EditSubjectDialogOpen, setEditSubjectDialogOpen] = useState(false);
    const [DeleteSubjectDialogOpen, setDeleteSubjectDialogOpen] = useState(false);
    const user = useUserDetails();

    const handleClick = (id) => {
        navigate("/subject/" + id);
    };

    if (!subject) return null;

    return (
        <>
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

                    {user.role === 'ROLE_ADMIN' && (
                        <div className={"flex justify-end pt-5"}>
                            {/* Edit button */}
                            <button
                                type="button"
                                className="me-1 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-500 hover:text-white focus:relative rounded-4xl hover:scale-110"
                                aria-label="Edit"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setEditSubjectDialogOpen(true);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                    />
                                </svg>
                            </button>

                            {/* Delete button */}
                            <button
                                type="button"
                                className="px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-red-500 hover:text-white focus:relative rounded-4xl hover:scale-110"
                                aria-label="Delete"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setDeleteSubjectDialogOpen(true);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <EditSubjectDialog
                open={EditSubjectDialogOpen}
                onClose={() => setEditSubjectDialogOpen(false)}
                subject={subject}
                onUpdate={onUpdate}
            />
            <DeleteSubjectDialog
                open={DeleteSubjectDialogOpen}
                onClose={() => setDeleteSubjectDialogOpen(false)}
                subject={subject}
                onDelete={onDelete}
            />
        </>
    );
};

export default SubjectCard;