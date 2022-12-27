import { fork, put, take } from "redux-saga/effects";
import { networkActions } from "./networkSlice";
import { channel } from "redux-saga";
function* syncNetworkStatus() {
    const networkChannel = channel();
    const listener = (e) => {
        networkChannel.put(networkActions.changeStatusNetwork(e.type));
    };
    window.addEventListener("offline", listener);
    window.addEventListener("online", listener);

    while (true) {
        const action = yield take(networkChannel);
        yield put(action);
    }
}

export default function* networkSaga() {
    yield fork(syncNetworkStatus);
}
