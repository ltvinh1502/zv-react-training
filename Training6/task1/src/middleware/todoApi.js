import axiosTask1 from "./axiosTask1";

const todoApi = {
    getAllTodo() {
        const url = "/todos";
        return axiosTask1.get(url);
    },
    deleteTodo(todoId) {
        const url = `/todos/${todoId}`;
        return axiosTask1.delete(url);
    },
    addTodo(todo) {
        const url = "/todos";
        return axiosTask1.post(url, todo);
    },
    updateTodo(todoId, todo) {
        const url = `/todos/${todoId}`;
        return axiosTask1.put(url, todo);
    },
};
export default todoApi;
