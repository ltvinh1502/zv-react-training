import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../services/actions/user.action";

const Header = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.user.userInfo);
    useEffect(() => {
        dispatch(getUserInfo());
    }, []);
    const logout = () => {
        localStorage.clear();
        navigate("/");
    };
    return (
        <header className="flex h-16 items-center justify-between">
            <span>Zigvy Logo</span>
            <div
                onClick={() => setOpenPopup(!openPopup)}
                className="relative cursor-pointer rounded-full flex items-center justify-center bg-gray-600 w-12 h-12"
            >
                <span className="text-white font-bold">
                    {userInfo?.fullName.match(/\b(\w)/g).join("")}
                </span>
                {openPopup && (
                    <div className="absolute top-5 items-start justify-center left-10 border bg-white px-10 flex flex-col">
                        <span className="whitespace-nowrap cursor-pointer hover:text-cyan-400">
                            {userInfo?.fullName}
                        </span>
                        <span
                            onClick={logout}
                            className="whitespace-nowrap cursor-pointer hover:text-cyan-400"
                        >
                            Logout
                        </span>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
