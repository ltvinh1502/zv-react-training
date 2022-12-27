import React from "react";
import { NavLink } from "react-router-dom";

const User = ({ userInfo }) => {
    return (
        <NavLink
            to={`/task2/users/${userInfo?.id}`}
            className={({ isActive }) =>
                ["group flex items-center ", isActive ? " font-bold" : null]
                    .filter(Boolean)
                    .join(" ")
            }
        >
            {userInfo?.fullName}
        </NavLink>
    );
};

export default User;
