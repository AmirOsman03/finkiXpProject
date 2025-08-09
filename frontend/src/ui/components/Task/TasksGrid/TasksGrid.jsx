import React from 'react';
import TaskCard from "../TaskCard/TaskCard.jsx";

const TasksGrid = ({tasks, onUpdate, onDelete, subjects}) => {
    return (
        <div className={"grid grid-cols-4 gap-5"}>
            {tasks.map((task) => (
                <div key={task.id}>
                    <TaskCard
                        task={task}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                        subjects={subjects}
                    />
                </div>
            ))}
        </div>
    );
};

export default TasksGrid;