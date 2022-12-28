import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DetailUser from "../../../components/DetailUser";
import User from "../../../components/User";
import {
  selectUserList,
  userActions,
} from "../../../redux/features/user/userSlice";
import { alertError } from "../../../utils/alert";
const Users = () => {
  const userList = useSelector(selectUserList);
  const [selectUser, setSelectUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    if (id) {
      const user = userList.find((user) => user.id === id);
      if (user) {
        setSelectUser(user);
      } else {
        alertError("User is not found");
        navigate("/task2/users");
      }
    }
  }, [id]);
  useEffect(() => {
    dispatch(userActions.getAllUser());
  }, []);

  return (
    <div>
      <Row>
        <Col span={6} className="flex items-center justify-center">
          <ul className="flex flex-col items-center justify-center gap-5">
            {userList?.map((item, index) => (
              <li key={index}>
                <User userInfo={item} setSelectUser={setSelectUser} />
              </li>
            ))}
          </ul>
        </Col>
        <Col span={18}>
          <DetailUser userInfo={selectUser} />
        </Col>
      </Row>
    </div>
  );
};

export default Users;
