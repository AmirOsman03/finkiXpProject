import {useEffect, useState} from "react";
import userRepository from "../repository/userRepository.js";

const initialState = {
    username: '',
    name: '',
    surname: '',
    role: '',
    level: '',
    xpPoints: '',
};

const UseUserDetails= () => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        userRepository
            .me()
            .then((response) => {
                setState({
                    username: response.data.username,
                    name: response.data.name,
                    surname: response.data.surname,
                    role: response.data.role,
                    level: response.data.level,
                    xpPoints: response.data.xpPoints,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return state;
};

export default UseUserDetails;