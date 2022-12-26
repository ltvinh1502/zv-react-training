import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskList: [],
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        getTaskList(state, action) {
            state.taskList = action.payload;
        },
        addTask(state, action) {
            state.taskList.push(action.payload);
        },
        upToReady(state, action) {
            const newList = [...state.taskList].map((task) =>
                task.id === action.payload
                    ? {
                          ...task,
                          status: "ready",
                      }
                    : task
            );
            state.taskList = newList;
        },
        upToSubmit(state, action) {
            const newList = [...state.taskList].map((task) =>
                task.id === action.payload
                    ? {
                          ...task,
                          status: "submitting",
                      }
                    : task
            );
            state.taskList = newList;
        },
        submittingSuccess(state, action) {
            const newList = [...state.taskList].map((task) =>
                task.id === action.payload
                    ? {
                          ...task,
                          status: "success",
                      }
                    : task
            );
            state.taskList = newList;
        },
        submittingError(state, action) {
            const newList = [...state.taskList].map((task) =>
                task.id === action.payload
                    ? {
                          ...task,
                          status: "error",
                      }
                    : task
            );
            state.taskList = newList;
        },
        handleTask(state, action) {},
        reSubmit(state, action) {},
        autoSubmitting(state, action) {},
    },
});

// Actions
export const taskActions = taskSlice.actions;
// Selectors
export const selectTaskList = (state) => state.task.taskList;
// Reducer
const taskReducer = taskSlice.reducer;
export default taskReducer;
