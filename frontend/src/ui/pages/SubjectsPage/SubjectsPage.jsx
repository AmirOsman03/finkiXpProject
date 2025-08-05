import { useState } from "react";
import useSubjects from "../../../hooks/useSubjects.js";
import SubjectsGrid from "../../components/Subject/SubjectsGrid/SubjectsGrid.jsx";
import { FaPlus } from 'react-icons/fa';
import AddSubjectDialog from "../../components/Subject/AddSubjectDialog/AddSubjectDialog.jsx";

const SubjectsPage = () => {
    const { subjects, loading, onCreate, onEdit, onDelete } = useSubjects();
    const [AddSubjectDialogOpen, setAddSubjectDialogOpen] = useState(false);
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[40vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600" />
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
                        onClick={() => setAddSubjectDialogOpen(true)}
                    >
                        <FaPlus className={"size-3"} />
                    </button>
                </div>
                <SubjectsGrid
                    subjects={subjects}
                    onCreate={onCreate}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            </div>
            <AddSubjectDialog
                open={AddSubjectDialogOpen}
                onClose={() => setAddSubjectDialogOpen(false)}
                onCreate={onCreate}
            />
        </>
    );
};

export default SubjectsPage;