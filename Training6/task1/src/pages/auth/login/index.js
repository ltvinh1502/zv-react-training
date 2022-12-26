import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/actions/user.action";

const Login = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };
    const handleLogin = () => {
        dispatch(login(inputValue));
    };
    return (
        <div>
            <label htmlFor="email">Email: </label>
            <input
                type="text"
                value={inputValue.email}
                name="email"
                onChange={handleChange}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                name="password"
                id="password"
                value={inputValue.password}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <button
                onClick={() => handleLogin()}
                className="text-white right-2.5 whitespace-nowrap bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
                Submit
            </button>
        </div>
    );
};

export default Login;
