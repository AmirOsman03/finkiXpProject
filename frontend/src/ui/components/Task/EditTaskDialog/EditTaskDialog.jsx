import React, {useState} from 'react';
import {BiExit} from "react-icons/bi";

const EditTaskDialog = ({open, onClose, task, onUpdate, subjects}) => {
    const [formData, setFormData] = useState({
        name: task.name,
        description: task.description,
        subjectId: task.subjectId,
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleClose = () => {
        onClose();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Updating task with id:', task.id);
        onUpdate(task.id, formData);
        onClose();
    }

    if (!open) return null;

    return (
        <div className="dialog-overlay" onClick={handleClose}>
            <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
                <div className={"flex justify-end mb-5 mt-3"} style={{marginRight: "1rem"}}>
                    <button
                        className="dialog-close-btn"
                        onClick={handleClose}
                        aria-label="Close dialog"
                    >
                        <BiExit
                            className={"size-10 hover:scale-105 text-black"}
                        />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="dialog-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">
                            Task Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Enter task name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="form-textarea"
                            placeholder="Enter task description"
                            rows="3"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject" className="form-label">
                            Subject *
                        </label>
                        <select
                            id="subjectId"
                            name="subjectId"
                            value={formData.subjectId}
                            onChange={handleChange}
                            className="form-input"
                            required
                        >
                            <option value="">Select a subject</option>
                            {subjects.map((subject) => (
                                <option key={subject.id} value={subject.id}>
                                    {subject.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={"flex justify-center items-center"}>
                        <div className="dialog-actions">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="btn bg-white hover:bg-gray-200 hover:scale-105"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex justify-center hover:scale-105"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTaskDialog;