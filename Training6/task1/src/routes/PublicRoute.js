import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute() {
    const token = localStorage.getItem("token");
    if (token) {
        return <Navigate to="/task2" />;
    } else {
        return <Outlet />;
    }
}

export default PublicRoute;
