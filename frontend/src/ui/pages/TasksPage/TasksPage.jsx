import React, {useState} from 'react';
import TasksGrid from "../../components/Task/TasksGrid/TasksGrid.jsx";
import useTasks from "../../../hooks/useTasks.js";
import {FaPlus} from "react-icons/fa";
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

        if (difficulty === "ALL") {
            filterByDifficulty("");
        } else {
            filterByDifficulty(difficulty);
        }
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
            <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5"}>
                <div className={"flex justify-end mb-5"}>
                    <button
                        type="button"
                        className="px-7 py-5 text-sm font-medium text-white rounded-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 transition-transform duration-300 hover:scale-105 hover:from-green-700 hover:via-green-700 hover:to-green-800 focus:relative"
                        aria-label="Add Subject"
                        onClick={() => setAddTaskDialogOpen(true)}
                    >
                        <FaPlus className={"size-3"}/>
                    </button>
                </div>
                {/* ✅ Dropdown filter */}
                <select value={selectedDifficulty} onChange={handleDifficultyChange}
                        className={"mb-4 p-2 border rounded-2xl "}>
                    <option value="ALL">All</option>
                    <option value="EASY">Easy</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HARD">Hard</option>
                </select>
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