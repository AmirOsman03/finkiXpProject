import React, {useState} from 'react';
import './AddSubjectDialog.css';
import {BiExit} from "react-icons/bi";

const initialFormData = {
    name: '',
};

const AddSubjectDialog = ({open, onClose, onCreate}) => {
    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(formData);
        setFormData(initialFormData);
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
                            Subject Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Enter subject name"
                            required
                        />
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
                                className="btn bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex justify-center hover:scale-105"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSubjectDialog;