import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../services/actions/todo.action";
import Modal from "../Modal";

const Todo = ({ id, name, completed }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex items-center py-4 px-6 border rounded-md justify-between gap-10">
            <div className="flex flex-1 items-center justify-between">
                <h1>{name}</h1>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {completed ? "Completed" : "Incomplete"}
                </span>
            </div>
            <div className="flex items-center gap-2 justify-center">
                <button
                    className="bg-yellow-100 border text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded"
                    onClick={() => setShowModal(true)}
                >
                    Edit
                </button>
                <button
                    onClick={() => dispatch(deleteTodo(id))}
                    className="bg-red-100 border text-red-800 text-sm font-medium px-2.5 py-0.5 rounded"
                >
                    X
                </button>
            </div>
            {showModal && (
                <Modal
                    id={id}
                    name={name}
                    completed={completed}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    );
};

export default Todo;
