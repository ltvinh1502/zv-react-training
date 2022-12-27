import {
    GET_ALL_USER,
    GET_ALL_USER_FAILURE,
    GET_ALL_USER_SUCCESS,
    GET_USER,
    GET_USER_INFO,
    GET_USER_INFO_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS,
} from "../constants/userConstants";

const initialState = {
    users: [],
    userInfo: null,
    loading: false,
    token: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                loading: true,
            };
        }
        case LOGIN_SUCCESS: {
            const { token } = action.payload;

            return {
                ...state,
                loading: false,
                token,
            };
        }
        case GET_USER_INFO: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_USER_INFO_SUCCESS: {
            return {
                ...state,
                userInfo: action.payload,
                loading: false,
            };
        }
        case GET_ALL_USER: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_ALL_USER_SUCCESS: {
            return {
                ...state,
                users: [...action.payload.users],
                loading: false,
            };
        }
        case GET_ALL_USER_FAILURE: {
            return {
                ...state,
                loading: false,
            };
        }
        default:
            return state;
    }
};

export default userReducer;
