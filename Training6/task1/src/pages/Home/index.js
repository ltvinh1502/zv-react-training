import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="flex ">
            <button
                onClick={() => navigate("/task1/")}
                className="text-white right-2.5 whitespace-nowrap bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
            >
                Task 1
            </button>
            <button
                onClick={() => navigate("/task2/")}
                className="text-white right-2.5 whitespace-nowrap bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
            >
                Task 2
            </button>
        </div>
    );
};

export default Home;
