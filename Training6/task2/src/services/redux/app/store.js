import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../app/rootSaga";
import networkReducer from "../features/network/networkSlice";
import taskReducer from "../features/task/taskSlice";
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: "root",
    version: 1,
    storage,
};
const rootReducer = combineReducers({
    network: networkReducer,
    task: taskReducer,
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
