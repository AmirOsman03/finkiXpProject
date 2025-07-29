import React from 'react';
import TasksGrid from "../../components/Task/TasksGrid/TasksGrid.jsx";
import useTasks from "../../../hooks/useTasks.js";

const TasksPage = () => {
    const {tasks, loading, onEdit, onDelete} = useTasks();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[40vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600" />
            </div>
        );
    }

    return (
        <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen"}>
            <TasksGrid
                tasks={tasks}
                onDelete={onDelete}
                onEdit={onEdit}
            />
        </div>
    );
};

export default TasksPage;