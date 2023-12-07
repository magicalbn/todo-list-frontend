import axios from "../config/todoAxios.config";

export const getTodoList = async (page, limit) => {
    const { data } = await axios.get(`/list?page=${page}&limit=${limit}`);
    return data;
};

export const deleteTodo = async (todoID) => {
    const { data } = await axios.delete(`/delete/${todoID}`);
    return data;
};
