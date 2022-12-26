import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
    const token = useSelector((state) => state.user.token);
    if (token) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" replace />;
    }
}

export default ProtectedRoutes;
