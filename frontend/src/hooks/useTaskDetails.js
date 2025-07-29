import {useEffect, useState} from 'react';
import taskRepository from "../repository/taskRepository.js";

const initialState = {
    task: null,
    loading: true,
};

const UseTaskDetails = (id) => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        taskRepository
            .findById(id)
            .then((response) => {
                setState({
                    task: response.data,
                    loading: false,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return state;
};

export default UseTaskDetails;