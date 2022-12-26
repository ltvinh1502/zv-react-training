import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    statusNetwork: navigator.onLine ? "online" : "offline",
};

const networkSlice = createSlice({
    name: "network",
    initialState,
    reducers: {
        changeStatusNetwork(state, action) {
            state.statusNetwork = action.payload;
        },
    },
});

// Actions
export const networkActions = networkSlice.actions;
// Selectors
export const selectStatusNetwork = (state) => state.network.statusNetwork;
// Reducer
const networkReducer = networkSlice.reducer;
export default networkReducer;
