import axiosInstance from "../axios /axios.js";

const subjectRepository = {
    findAll: async () => {
        return await axiosInstance.get('/subject')
    },
    findById: async (id) => {
        return await axiosInstance.get(`/subject/${id}`)
    },
    create: async (data) => {
        return await axiosInstance.post('/subject/add', data)
    },
    edit: async (id, data) => {
        return await axiosInstance.put(`/subject/edit/${id}`, data)
    },
    delete: async (id) => {
        return await axiosInstance.delete(`/subject/delete/${id}`)
    },
};

export default subjectRepository;