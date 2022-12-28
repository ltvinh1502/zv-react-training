import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import todoApi from "../../services/api/todosApi";
import { todoActions } from "../features/todoSlice";

function* getAllTodo() {
  try {
    const data = yield call(todoApi.getAllTodo);
    yield put(todoActions.getTodoListSuccess(data));
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
    yield call(todoApi.deleteTodo, action.payload.id);
    yield call(getAllTodo);
  } catch (error) {
    console.log(error);
  }
}

export default function* todoSaga() {
  yield all([
    takeLatest(todoActions.getTodoList, getAllTodo),
    takeEvery(todoActions.addTodo, addNewTodo),
    takeEvery(todoActions.updateTodo, updateTodo),
    takeEvery(todoActions.deleteTodo, deleteTodo),
  ]);
}
