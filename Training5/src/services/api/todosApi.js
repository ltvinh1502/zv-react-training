import axiosClient from "./axiosClient";

const todoApi = {
    getAllTodo() {
        const url = "/todos";
        return axiosClient.get(url);
    },
    deleteTodo(todoId) {
        const url = `/todos/${todoId}`;
        return axiosClient.delete(url);
    },
    addTodo(todo) {
        const url = "/todos";
        return axiosClient.post(url, todo);
    },
    updateTodo(todoId, todo) {
        const url = `/todos/${todoId}`;
        return axiosClient.put(url, todo);
    },
};
export default todoApi;
