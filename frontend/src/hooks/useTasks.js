import {useCallback, useEffect, useState} from 'react';
import taskRepository from "../repository/taskRepository.js";

const initialState = {
    tasks: [],
    loading: true,
};

const UseTasks = () => {
    const [state, setState] = useState(initialState);

    const fetchTasks = useCallback(() => {
        setState(initialState);
        taskRepository
            .findAll()
            .then((response) => {
                setState({
                    tasks: response.data,
                    loading: false,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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


    const filterByDifficulty = useCallback((difficulty) => {
        if (!difficulty) {
            return fetchTasks();
        }
        setState(initialState);
        taskRepository.findByDifficulty(difficulty)
            .then(response =>
                setState({
                    tasks:
                    response.data,
                    loading: false
                })
            ).catch(error => console.log(error));
    }, [fetchTasks]);

    const filterSort = useCallback((sort) => {
        if (!sort) {
            return fetchTasks();
        }
        setState(initialState);
        taskRepository
            .sort(sort)
            .then(response =>
                setState({
                    tasks: response.data,
                    loading: false
                })
            ).catch(error => console.log(error));
    }, [fetchTasks])


    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return {
        ...state,
        onCreate: onCreate,
        onUpdate: onUpdate,
        onDelete: onDelete,
        filterByDifficulty: filterByDifficulty,
        filterSort: filterSort,
    };
};

export default UseTasks;