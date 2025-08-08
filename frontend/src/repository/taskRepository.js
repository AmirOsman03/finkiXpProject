import axiosInstance from "../axios /axios.js";

const taskRepository = {
    findAll: async () => {
        return await axiosInstance.get('/tasks')
    },
    findById: async (id) => {
        return await axiosInstance.get(`/tasks/${id}`)
    },
    create: async (data) => {
        return await axiosInstance.post('/tasks/add', data)
    },
    edit: async (id, data) => {
        return await axiosInstance.put(`/tasks/edit/${id}`, data)
    },
    delete: async (id) => {
        return await axiosInstance.delete(`/tasks/delete/${id}`)
    },
    findByDifficulty: async (difficulty) => {
        return await axiosInstance.get(`/tasks/by-difficulty?difficulty=${difficulty}`);
    },
};

export default taskRepository;