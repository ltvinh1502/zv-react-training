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
      return {
        ...state,
        loading: true,
      };
    },
    loginSuccess(state, action) {
      const { token } = action.payload;
      localStorage.setItem("token", token);
      return {
        ...state,
        loading: false,
      };
    },
    getUserInfo(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    getUserInfoSuccess(state, action) {
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    },
    getAllUser(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    getAllUserSuccess(state, action) {
      return {
        ...state,
        loading: false,
        users: [...action.payload.users],
      };
    },
    getAllUserFailure(state, action) {
      return {
        ...state,
        loading: false,
      };
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
