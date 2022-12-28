import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import loginApi from "../../services/api/loginApi";
import userApi from "../../services/api/usersApi";
import { alertError } from "../../utils/alert";
import { history } from "../../utils/history";
import { userActions } from "../features/userSlice";
function* login(action) {
  try {
    yield delay(1000);
    const data = yield call(() => loginApi.login(action.payload));
    yield put(userActions.loginSuccess(data));
    history.push("/task2/home");
  } catch (error) {
    console.log(error);
  }
}
function* getUserInfo() {
  try {
    const data = yield call(() => userApi.getUserInfo());
    yield put(userActions.getUserInfoSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
function* getAllUser() {
  try {
    const data = yield call(() => userApi.getAllUser());
    yield put(userActions.getAllUserSuccess(data));
  } catch (error) {
    alertError("You have not permission to do it");
    history.push("/task2/home");
  }
}
export default function* userSaga() {
  yield all([
    takeLatest(userActions.login, login),
    takeLatest(userActions.getUserInfo, getUserInfo),
    takeLatest(userActions.getAllUser, getAllUser),
  ]);
}
