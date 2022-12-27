import { all } from "redux-saga/effects";
import todoSaga from "./todoSaga";
import userSaga from "./userSaga";

function* helloSaga() {
    console.log("Hello saga");
}

export default function* rootSaga() {
    console.log("root saga");
    yield all([helloSaga(), userSaga(), todoSaga()]);
}
