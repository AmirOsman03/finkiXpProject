import React, {useState} from 'react';
import './AddTaskDialog.css';

const initialFormData = {
    name: '',
    description: '',
    subjectId: '',
}

const AddTaskDialog = ({subjects, open, onClose, onCreate}) => {
    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!formData.name || !formData.subjectId) {
            alert('Please fill in all required fields');
            return;
        }

        formData.subjectId = parseInt(formData.subjectId);
        onCreate(formData);
        setFormData(formData);
        onClose();
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleClose = () => {
        setFormData(initialFormData);
        onClose();
    };

    if (!open) return null;

    return (
        <div className="dialog-overlay" onClick={handleClose}>
            <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
                <div className="dialog-header">
                    <h2 className="dialog-title">Add New Task</h2>
                    <button
                        className="dialog-close-btn"
                        onClick={handleClose}
                        aria-label="Close dialog"
                    >
                        ×
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

                    <div className="dialog-actions">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="btn btn-secondary"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTaskDialog;