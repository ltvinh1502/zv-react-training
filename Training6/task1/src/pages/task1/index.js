import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import Todos from "../../components/Todos";
import { fetchTodos } from "../../middleware/get-api";
import {
    changeStatusNetwork,
    filterTodo,
    getTodoList,
    searchTodo,
} from "../../services/actions/todo.action";
const Task1 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const todoList = useSelector((state) => state.todo.todos);
    const filterData = useSelector((state) => state.todo.filterData);
    const [searchValue, setSearchValue] = useState("");
    const [showModal, setShowModal] = useState(false);
    async function fetchData() {
        setSearchValue("");
        const res = await fetchTodos();
        dispatch(getTodoList(res));
    }

    function handleFilter(e) {
        dispatch(filterTodo(e.target.value));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <button
                onClick={() => navigate("/")}
                className="text-white mb-2 right-2.5 whitespace-nowrap bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
                Go back Home
            </button>
            <div className="flex gap-10">
                <div className="flex w-full">
                    <input
                        type="text"
                        value={searchValue}
                        name="title"
                        placeholder="Enter title"
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    />
                    <button
                        onClick={() => dispatch(searchTodo(searchValue))}
                        className="text-white right-2.5 whitespace-nowrap bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 "
                    >
                        Search
                    </button>
                </div>
                <button
                    className="text-white right-2.5 whitespace-nowrap bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 "
                    onClick={() => setShowModal(true)}
                >
                    + Create
                </button>
                <button
                    className="text-white right-2.5 whitespace-nowrap bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 "
                    onClick={() => fetchData()}
                >
                    Reset
                </button>
            </div>
            <div>
                <label htmlFor="filter">Filter: </label>

                <select
                    id="filter"
                    onChange={handleFilter}
                    className="border bg-gray-50"
                >
                    <option value="all">All</option>
                    <option value={false}>Incomplete</option>
                    <option value={true}>Completed</option>
                </select>
            </div>
            <Todos todos={filterData} />
            {showModal && (
                <Modal
                    addModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    );
};

export default Task1;
