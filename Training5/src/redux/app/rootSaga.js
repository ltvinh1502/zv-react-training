import { all } from "redux-saga/effects";
import todoSaga from "../features/todo/todoSaga";
import userSaga from "../features/user/userSaga";

function* helloSaga() {
  console.log("Hello saga");
}

export default function* rootSaga() {
  console.log("root saga");
  yield all([helloSaga(), userSaga(), todoSaga()]);
}
