import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
    const token = localStorage.getItem("token");
    if (token) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" replace />;
    }
}

export default ProtectedRoutes;
