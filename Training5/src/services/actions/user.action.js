import {
    GET_ALL_USER,
    GET_ALL_USER_FAILURE,
    GET_ALL_USER_SUCCESS,
    GET_USER_INFO,
    GET_USER_INFO_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS,
} from "../constants/userConstants";

export const login = (payload) => {
    return {
        type: LOGIN,
        payload,
    };
};
export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload,
    };
};

export const getUserInfo = (payload) => {
    return {
        type: GET_USER_INFO,
        payload,
    };
};
export const getUserInfoSuccess = (payload) => {
    return {
        type: GET_USER_INFO_SUCCESS,
        payload,
    };
};

export const getAllUser = (payload) => {
    return {
        type: GET_ALL_USER,
        payload,
    };
};
export const getAllUserSuccess = (payload) => {
    return {
        type: GET_ALL_USER_SUCCESS,
        payload,
    };
};
export const getAllUserFailure = (payload) => {
    return {
        type: GET_ALL_USER_FAILURE,
        payload,
    };
};
