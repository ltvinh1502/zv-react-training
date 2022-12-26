import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import {
    getAllUserFailure,
    getAllUserSuccess,
    getUserInfoSuccess,
    loginSuccess,
} from "../../services/actions/user.action";
import {
    GET_ALL_USER,
    GET_USER_INFO,
    LOGIN,
} from "../../services/constants/userConstants";
import { alertError } from "../../utils/alert";
import { history } from "../../utils/history";
import loginApi from "../loginApi";
import userApi from "../userApi";
function* login(action) {
    try {
        yield delay(1000);
        const data = yield call(() => loginApi.login(action.payload));
        yield put(loginSuccess(data));
        history.push("/task2/");
    } catch (error) {
        console.log(error);
    }
}
function* getUserInfo() {
    try {
        const data = yield call(() => userApi.getUserInfo());
        yield put(getUserInfoSuccess(data));
    } catch (error) {
        console.log(error);
    }
}
function* getAllUser() {
    try {
        const data = yield call(() => userApi.getAllUser());
        yield put(getAllUserSuccess(data));
    } catch (error) {
        alertError("You have not permission to do it");
        history.push("/task2/");
    }
}
export default function* userSaga() {
    yield all([
        takeLatest(LOGIN, login),
        takeLatest(GET_USER_INFO, getUserInfo),
        takeLatest(GET_ALL_USER, getAllUser),
    ]);
}
