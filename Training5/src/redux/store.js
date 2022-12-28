import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";
import userReducer from "./features/userSlice";
import todoReducer from "./features/todoSlice";

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
