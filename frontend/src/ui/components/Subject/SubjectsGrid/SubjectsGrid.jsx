import SubjectCard from "../SubjectCard/SubjectCard.jsx";

const SubjectsGrid = ({subjects, onDelete, onUpdate}) => {
    return (
        <div className={"grid grid-cols-4 gap-5"}>
            {subjects.map((subject) => (
                <div key={subject.id}>
                    <SubjectCard
                        subject={subject}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                    />
                </div>
            ))}
        </div>
    );
};

export default SubjectsGrid;