import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getAllUser } from "../../services/actions/user.action";

const Sidebar = () => {
    const dispatch = useDispatch();
    return (
        <ul>
            <li>
                <NavLink
                    to="/task2/"
                    className={({ isActive }) =>
                        [
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md",
                            isActive ? "bg-blue-500 text-white" : null,
                        ]
                            .filter(Boolean)
                            .join(" ")
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/task2/users"
                    className={({ isActive }) =>
                        [
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md",
                            isActive ? "bg-blue-500 text-white" : null,
                        ]
                            .filter(Boolean)
                            .join(" ")
                    }
                >
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/task2/my-info"
                    className={({ isActive }) =>
                        [
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md",
                            isActive ? "bg-blue-500 text-white" : null,
                        ]
                            .filter(Boolean)
                            .join(" ")
                    }
                >
                    My Info
                </NavLink>
            </li>
        </ul>
    );
};
export default Sidebar;
