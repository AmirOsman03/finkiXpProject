import React from 'react';
import {BiExit} from "react-icons/bi";
import {RiDeleteBinLine} from "react-icons/ri";

const DeleteTaskDialog = ({task, onClose, onDelete, open}) => {
    const handleSubmit = () => {
        onDelete(task.id);
        onClose();
    }

    const handleClose = () => {
        onClose();
    }

    if (!open) {
        return null;
    }

    return (
        <div className="dialog-overlay" onClick={handleClose}>
            <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
                <div className={"flex justify-end mb-5 mt-3"} style={{marginRight: "1rem"}}>
                    <button
                        type={"button"}
                        className="dialog-close-btn"
                        onClick={handleClose}
                        aria-label="Close dialog"
                    >
                        <BiExit
                            className={"size-10 hover:scale-105 text-black"}
                        />
                    </button>
                </div>

                <div className={"dialog-form"}>
                    <div className={"text-center text-3xl"}>
                        <p>Are you sure you want to <span className={"text-red-600 font-bold"}>delete</span> <span
                            className={"underline"}>{task.name}</span>?</p>
                    </div>
                </div>

                <div className={"flex justify-center items-center mb-3"}>
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
                            className="btn bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full flex justify-center hover:scale-105"
                            onClick={handleSubmit}
                        >
                            <RiDeleteBinLine
                                className={"size-5 me-2"}
                            />
                            Delete
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DeleteTaskDialog;