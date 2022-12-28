import axiosClient from "./axiosClient";

const userApi = {
    getUserInfo() {
        const url = "/api/users/my";
        return axiosClient.get(url);
    },
    getAllUser() {
        const url = `/api/users`;
        return axiosClient.get(url);
    },
};
export default userApi;
