import axiosInstance from "../axios /axios.js";

const userRepository = {
    login: async (data) => {
        return await axiosInstance.post('/user/login', data)
    },
    register: async (data) => {
        return await axiosInstance.post('/user/register', data)
    },
    // TODO: Logout


    getLeaderboard: async () => {
        return await axiosInstance.get('/user/leaderboard')
    },
}

export default userRepository;