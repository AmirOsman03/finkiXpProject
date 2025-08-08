import React, {useState} from 'react';
import TasksGrid from "../../components/Task/TasksGrid/TasksGrid.jsx";
import useTasks from "../../../hooks/useTasks.js";
import {FaPlus, FaChevronDown} from "react-icons/fa";
import AddTaskDialog from "../../components/Task/AddTaskDialog/AddTaskDialog.jsx";
import useSubjects from "../../../hooks/useSubjects.js";

const TasksPage = () => {
    const {tasks, loading, onCreate, onUpdate, onDelete, filterByDifficulty} = useTasks();
    const [AddTaskDialogOpen, setAddTaskDialogOpen] = useState(false);
    const {subjects} = useSubjects();
    const [selectedDifficulty, setSelectedDifficulty] = useState("ALL");

    const handleDifficultyChange = (event) => {
        const difficulty = event.target.value;
        setSelectedDifficulty(difficulty);
        filterByDifficulty(difficulty === "ALL" ? "" : difficulty);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[40vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"/>
            </div>
        );
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <div className="flex justify-between items-center mb-6">
                    {/* Modern Dropdown Filter */}
                    <div className="relative w-64">
                        <label htmlFor="difficulty-filter" className="block text-sm font-medium text-gray-700 mb-1">
                            Choose a difficulty
                        </label>
                        <div className="relative">
                            <select
                                id="difficulty-filter"
                                value={selectedDifficulty}
                                onChange={handleDifficultyChange}
                                className="appearance-none w-full pl-4 pr-10 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 transition-all duration-200"
                            >
                                <option value="ALL">All Difficulties</option>
                                <option value="EASY">Easy</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HARD">Hard</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <FaChevronDown className="text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Add Task Button */}
                    <button
                        type="button"
                        className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg"
                        onClick={() => setAddTaskDialogOpen(true)}
                    >
                        <FaPlus className="text-white" />
                        <span>Add Task</span>
                    </button>
                </div>

                <TasksGrid
                    tasks={tasks}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    subjects={subjects}
                />
            </div>

            <AddTaskDialog
                open={AddTaskDialogOpen}
                onClose={() => setAddTaskDialogOpen(false)}
                onCreate={onCreate}
                subjects={subjects}
            />
        </>
    );
};

export default TasksPage;