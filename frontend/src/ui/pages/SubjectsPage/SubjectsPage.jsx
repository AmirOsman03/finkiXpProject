import React from 'react';
import useSubjects from "../../../hooks/useSubjects.js";
import SubjectsGrid from "../../components/Subject/SubjectsGrid/SubjectsGrid.jsx";

const SubjectsPage = () => {
    const {subjects, loading, onCreate, onEdit, onDelete} = useSubjects();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[40vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600" />
            </div>
        );
    }

    return (
        <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5"}>
            <SubjectsGrid
                subjects={subjects}
                onCreate={onCreate}
                onDelete={onDelete}
                onEdit={onEdit}
            />
        </div>
    );
};

export default SubjectsPage;