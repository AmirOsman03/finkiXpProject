import {useCallback, useEffect, useState} from 'react';
import taskRepository from "../repository/taskRepository.js";

const initialState = {
    tasks: [],
    loading: true,
};

const UseTasks = () => {
    const [state, setState] = useState(initialState);
    const [difficulty, setDifficulty] = useState(null);

    const fetchTasks = useCallback(() => {
        setState(initialState);
        const fetchPromise = difficulty
            ? taskRepository.findByDifficulty(difficulty)
            : taskRepository.findAll();

        fetchPromise
            .then((response) => {
                setState({
                    tasks: response.data,
                    loading: false
                })
            })
            .catch((error) => {
                console.log(error);
            })

    }, [difficulty]);

    const onCreate = useCallback((data) => {
        taskRepository
            .create(data)
            .then(() => {
                fetchTasks()
                console.log("Successfully created task!")
            })
            .catch((error) => {
                console.log(error);
            });
    }, [fetchTasks]);

    const onUpdate = useCallback((id, data) => {
        taskRepository
            .edit(id, data)
            .then(() => {
                fetchTasks()
                console.log("Successfully edited task!")
            })
            .catch((error) => {
                console.log(error);
            });
    }, [fetchTasks]);

    const onDelete = useCallback((id) => {
        taskRepository
            .delete(id)
            .then(() => {
                fetchTasks()
                console.log("Successfully deleted task!")
            })
            .catch((error) => {
                console.log(error);
            });
    }, [fetchTasks]);

    const onComplete = useCallback((id) => {
        taskRepository
            .complete(id)
            .then(() => {
                fetchTasks()
                console.log("Successfully completed task!")
            })
            .catch((error) => {
                console.log(error);
            })
    }, [fetchTasks]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return {
        ...state,
        onCreate: onCreate,
        onUpdate: onUpdate,
        onDelete: onDelete,
        onComplete: onComplete,
        difficulty: difficulty,
        setDifficulty: setDifficulty
    };
};

export default UseTasks;