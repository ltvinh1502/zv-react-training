import React from "react";
import { useSelector } from "react-redux";
import DetailUser from "../../../components/DetailUser";

const MyInfo = () => {
    const userInfo = useSelector((state) => state.user.userInfo);

    return <DetailUser userInfo={userInfo} />;
};

export default MyInfo;
