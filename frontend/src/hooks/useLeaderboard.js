import {useCallback, useEffect, useState} from 'react';
import userRepository from "../repository/userRepository.js";

const initialState = {
    users: [],
    loading: true,
};

const UseLeaderboard = () => {
    const [state, setState] = useState(initialState);

    const fetchUsers = useCallback(() => {
        userRepository
            .getLeaderboard()
            .then((response) => {
                setState({
                    users: response.data,
                    loading: false,
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return {...state}
};

export default UseLeaderboard;