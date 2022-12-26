import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute() {
    const token = useSelector((state) => state.user.token);
    if (token) {
        return <Navigate to="/task2" />;
    } else {
        return <Outlet />;
    }
}

export default PublicRoute;
