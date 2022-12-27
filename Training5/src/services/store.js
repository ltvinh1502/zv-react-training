import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo.reducer";
import userReducer from "./reducers/user.reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../middleware/redux-saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        todo: todoReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
