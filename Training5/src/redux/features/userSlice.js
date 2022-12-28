import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  userInfo: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      const { token } = action.payload;
      localStorage.setItem("token", token);
      state.loading = false;
    },
    getUserInfo(state, action) {
      state.loading = true;
    },
    getUserInfoSuccess(state, action) {
      state.loading = false;
      state.userInfo = action.payload;
    },
    getAllUser(state, action) {
      state.loading = true;
    },
    getAllUserSuccess(state, action) {
      state.loading = false;
      state.users = [...action.payload.users];
    },
    getAllUserFailure(state, action) {
      state.loading = false;
    },
  },
});

// Actions
export const userActions = userSlice.actions;
// Selectors
export const selectUserList = (state) => state.user.users;
export const selectUserInfo = (state) => state.user.userInfo;
// Reducer
const userReducer = userSlice.reducer;
export default userReducer;
