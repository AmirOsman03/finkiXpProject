import React, {useCallback, useEffect, useState} from 'react';
import subjectRepository from "../repository/subjectRepository.js";

const initialState = {
    subjects: [],
    loading: true,
};

const UseSubjects = () => {
    const [state, setState] = useState(initialState);

    const fetchSubjects = useCallback(() => {
        setState(initialState);
        subjectRepository
            .findAll()
            .then((response) => {
                setState({
                    subjects: response.data,
                    loading: false,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onCreate = useCallback((data) => {
        subjectRepository
            .create(data)
            .then(() => {
                fetchSubjects()
                console.log("Successfully created subject!")
            })
            .catch((error) => {
                console.log(error);
            });
    }, [fetchSubjects]);

    const onEdit = useCallback((id, data) => {
        subjectRepository
            .edit(id, data)
            .then(() => {
                fetchSubjects()
                console.log("Successfully edited subject!")
            })
            .catch((error) => {
                console.log(error);
            });
    }, [fetchSubjects]);

    const onDelete = useCallback((id) => {
        subjectRepository
            .delete(id)
            .then(() => {
                fetchSubjects()
                console.log("Successfully deleted subject!")
            })
            .catch((error) => {
                console.log(error);
            });
    }, [fetchSubjects]);

    useEffect(() => {
        fetchSubjects()
    }, [fetchSubjects]);

    return {
        ...state,
        onCreate: onCreate,
        onEdit: onEdit,
        onDelete: onDelete,
    };
};

export default UseSubjects;