import axios from "../config/todoAxios.config";

export const getTodoList = async () => {
    const { data } = await axios.get("/list?page=1&limit=10");
    return data;
};

export const deleteTodo = async (todoID) => {
    const { data } = await axios.delete(`/delete/${todoID}`);
    return data;
};
