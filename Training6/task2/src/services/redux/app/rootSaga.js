import { all } from "redux-saga/effects";
import networkSaga from "../features/network/networkSaga";
import taskSaga from "../features/task/taskSaga";

function* helloSaga() {
    console.log("Hello saga");
}

export default function* rootSaga() {
    console.log("root saga");
    yield all([helloSaga(), networkSaga(), taskSaga()]);
}
