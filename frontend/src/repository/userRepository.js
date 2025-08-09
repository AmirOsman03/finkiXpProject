import axiosInstance from "../axios /axios.js";

const userRepository = {
    login: async (data) => {
        return await axiosInstance.post('/user/login', data)
    },
    register: async (data) => {
        return await axiosInstance.post('/user/register', data)
    },
    me: async () => {
      return await axiosInstance.get('/user/me')
    },
    getLeaderboard: async () => {
        return await axiosInstance.get('/user/leaderboard')
    },
}

export default userRepository;