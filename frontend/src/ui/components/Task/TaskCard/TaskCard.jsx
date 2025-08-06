import React, {useState} from 'react';
import {useNavigate} from "react-router";
import {FaBook, FaRegStar} from 'react-icons/fa';
import EditTaskDialog from "../EditTaskDialog/EditTaskDialog.jsx";
import DeleteTaskDialog from "../DeleteTaskDialog/DeleteTaskDialog.jsx";


const TaskCard = ({task, onUpdate, onDelete, subjects}) => {
    const navigate = useNavigate();
    const [EditTaskDialogOpen, setEditTaskDialogOpen] = useState(false);
    const [DeleteTaskDialogOpen, setDeleteTaskDialogOpen] = useState(false);

    const handleClick = (id) => {
        navigate("/tasks/" + id);
    };

    if (!task) return null;

    return (
        <>
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
                    <div className={"flex justify-end pt-5"}>
                        {/* Edit button */}
                        <button
                            type="button"
                            className="me-1 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-500 hover:text-white focus:relative rounded-4xl hover:scale-110"
                            aria-label="Edit"
                            onClick={(e) => {
                                e.stopPropagation();
                                setEditTaskDialogOpen(true);
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
                                setDeleteTaskDialogOpen(true);
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
                </div>
            </div>
            <EditTaskDialog
                open={EditTaskDialogOpen}
                onClose={() => setEditTaskDialogOpen(false)}
                onUpdate={onUpdate}
                task={task}
                subjects={subjects}
            />
            <DeleteTaskDialog
                open={DeleteTaskDialogOpen}
                onClose={() => setDeleteTaskDialogOpen(false)}
                onDelete={onDelete}
                task={task}
            />
        </>
    );
};

export default TaskCard;