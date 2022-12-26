import {
    delay, put,
    select,
    takeEvery
} from "redux-saga/effects";
import { selectStatusNetwork } from "../network/networkSlice";
import { selectTaskList, taskActions } from "./taskSlice";

function* handleTask(action) {
    try {
        const online = yield select(selectStatusNetwork);
        yield put(taskActions.upToReady(action.payload));
        yield delay(2000);

        yield put(taskActions.upToSubmit(action.payload));
        yield delay(2000);

        const success = Math.random() < 0.5;
        if (online === "online") {
            if (success)
                yield put(taskActions.submittingSuccess(action.payload));
            else yield put(taskActions.submittingError(action.payload));
        }
    } catch (err) {
        console.log(err);
    }
}
function* autoSubmitting() {
    try {
        const taskList = yield select(selectTaskList);
        const taskSubmitList = [...taskList].filter(
            (task) => task.status === "submitting"
        );
        for (let index = 0; index < taskSubmitList.length; index++) {
            yield delay(2000);
            const success = Math.random() < 0.5;
            if (success)
                yield put(
                    taskActions.submittingSuccess(taskSubmitList[index].id)
                );
            else
                yield put(
                    taskActions.submittingError(taskSubmitList[index].id)
                );
        }
    } catch (error) {
        console.log(error);
    }
}
function* handleResubmit(action) {
    try {
        const online = yield select(selectStatusNetwork);

        if (online === "online") {
            yield put(taskActions.upToSubmit(action.payload));
            yield delay(2000);
            const success = Math.random() < 0.5;
            if (success)
                yield put(taskActions.submittingSuccess(action.payload));
            else yield put(taskActions.submittingError(action.payload));
        }
    } catch (err) {
        console.log(err);
    }
}

export default function* taskSaga() {
    yield takeEvery(taskActions.autoSubmitting, autoSubmitting);
    yield takeEvery(taskActions.handleTask, handleTask);
    yield takeEvery(taskActions.reSubmit, handleResubmit);
}
