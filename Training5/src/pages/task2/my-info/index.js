import React from "react";
import { useSelector } from "react-redux";
import DetailUser from "../../../components/DetailUser";
import { selectUserInfo } from "../../../redux/features/userSlice";
const MyInfo = () => {
  const userInfo = useSelector(selectUserInfo);

  return <DetailUser userInfo={userInfo} />;
};

export default MyInfo;
