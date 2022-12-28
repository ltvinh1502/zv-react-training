import { Navigate } from "react-router-dom";

const CheckRoute = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/task2/home" />;
  } else {
    return <Navigate to="/auth/login" />;
  }
};
export default CheckRoute;
