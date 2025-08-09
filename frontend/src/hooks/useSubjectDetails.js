import React, {useEffect, useState} from 'react';
import subjectRepository from "../repository/subjectRepository.js";

const initialState = {
    subject: null,
    tasks: [],
    loading: true,
}

const useSubjectDetails = (id) => {
    const [state, setState] = useState(initialState)

    useEffect(() => {
        subjectRepository
            .findById(id)
            .then((response) => {
                setState({
                    subject: response.data,
                    tasks: response.data.tasks,
                    loading: false,
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    return state
};

export default useSubjectDetails;