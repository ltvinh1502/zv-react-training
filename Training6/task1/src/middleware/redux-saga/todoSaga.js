import {
    all,
    call,
    put,
    select,
    takeEvery,
    takeLatest,
} from "redux-saga/effects";
import { getTodoList } from "../../services/actions/todo.action";
import {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,
} from "../../services/constants/todoConstants";
import todoApi from "../todoApi";

function* getAllTodo() {
    try {
        const todoList = yield select((state) => state.todo.todos);
        console.log(todoList);
        const data = yield call(todoApi.getAllTodo);
        yield put(getTodoList(data));
    } catch (error) {
        console.log(error);
    }
}
function* addNewTodo(action) {
    try {
        yield call(todoApi.addTodo, action.payload);
    } catch (error) {
        console.log(error);
    }
}
function* updateTodo(action) {
    try {
        yield call(todoApi.updateTodo, action.payload.id, action.payload);
    } catch (error) {
        console.log(error);
    }
}
function* deleteTodo(action) {
    try {
        yield call(todoApi.deleteTodo, action.payload);
    } catch (error) {
        console.log(error);
    }
}

export default function* todoSaga() {
    yield all([
        getAllTodo(),
        takeEvery(ADD_TODO, addNewTodo),
        takeEvery(UPDATE_TODO, updateTodo),
        takeEvery(DELETE_TODO, deleteTodo),
    ]);
}
