import React from 'react';
import SubjectCard from "../SubjectCard/SubjectCard.jsx";

const SubjectsGrid = ({subjects, onCreate, onDelete, onEdit}) => {
    return (
        <div className={"grid grid-cols-4 gap-5"}>
            {subjects.map((subject) => (
                <div key={subject.id}>
                    <SubjectCard
                        subject={subject}
                        onCreate={onCreate}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                </div>
            ))}
        </div>
    );
};

export default SubjectsGrid;