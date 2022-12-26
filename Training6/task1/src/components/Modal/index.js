import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo, updateTodo } from "../../services/actions/todo.action";

const Modal = ({ setShowModal, id, showModal, name, completed, addModal }) => {
    const [inputField, setInputField] = useState({
        id: id || uuidv4(),
        name: name || "",
        completed: completed || false,
    });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputField({ ...inputField, [name]: value });
    };
    const handleUpdate = () => {
        if (addModal) {
            dispatch(
                addTodo({
                    ...inputField,
                    completed: JSON.parse(inputField.completed),
                })
            );
        } else {
            dispatch(
                updateTodo({
                    ...inputField,
                    completed: JSON.parse(inputField.completed),
                })
            );
        }
        setShowModal(false);
    };
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                {addModal ? "Add" : "Edit"} Todo
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        <div className="relative p-6 flex">
                            <input
                                type="text"
                                value={inputField.name}
                                name="name"
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            />
                            {!addModal && (
                                <select
                                    value={inputField.completed}
                                    name="completed"
                                    onChange={handleChange}
                                    className="border bg-gray-50"
                                >
                                    <option value={false}>Incomplete</option>
                                    <option value={true}>Completed</option>
                                </select>
                            )}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={handleUpdate}
                            >
                                {addModal ? "Create" : "Save Changes"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default Modal;
