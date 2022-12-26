import {
    all,
    call,
    put,
    select,
    takeEvery,
    takeLatest,
} from "redux-saga/effects";
import {
    getTodoList,
    getTodoListSuccess,
} from "../../services/actions/todo.action";
import {
    ADD_TODO,
    DELETE_TODO,
    GET_TODO_LIST,
    UPDATE_TODO,
} from "../../services/constants/todoConstants";
import todoApi from "../todoApi";

function* getAllTodo() {
    try {
        const data = yield call(todoApi.getAllTodo);
        yield put(getTodoListSuccess(data));
    } catch (error) {
        console.log(error);
    }
}
function* addNewTodo(action) {
    try {
        yield call(todoApi.addTodo, action.payload);
        yield call(getAllTodo);
    } catch (error) {
        console.log(error);
    }
}
function* updateTodo(action) {
    try {
        yield call(todoApi.updateTodo, action.payload.id, action.payload);
        yield call(getAllTodo);
    } catch (error) {
        console.log(error);
    }
}
function* deleteTodo(action) {
    try {
        yield call(todoApi.deleteTodo, action.payload);
        yield call(getAllTodo);
    } catch (error) {
        console.log(error);
    }
}

export default function* todoSaga() {
    yield all([
        takeLatest(GET_TODO_LIST, getAllTodo),
        takeEvery(ADD_TODO, addNewTodo),
        takeEvery(UPDATE_TODO, updateTodo),
        takeEvery(DELETE_TODO, deleteTodo),
    ]);
}
