import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo.reducer";
import userReducer from "./reducers/user.reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../middleware/redux-saga/rootSaga";
import storage from "redux-persist/lib/storage";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: "root",
    version: 1,
    storage,
};
const rootReducer = combineReducers({
    todo: todoReducer,
    user: userReducer,
});
const rootPersistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: rootPersistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export let persistor = persistStore(store);
