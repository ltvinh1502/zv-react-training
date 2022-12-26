import React from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../services/redux/features/task/taskSlice";

const Todo = ({ task }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        if (task.status === "draft") {
            dispatch(taskActions.handleTask(task.id));
        } else if (task.status === "error") {
            dispatch(taskActions.reSubmit(task.id));
        }
    };
    return (
        <div className="border border-black py-5 inline-block w-full">
            <div className="grid-cols-3 grid ">
                <div className="col-span-2 flex items-start pl-5">
                    <span>{task.content}</span>
                </div>
                <div>
                    <button
                        onClick={handleClick}
                        className="border font-semibold p-2 border-black"
                    >
                        {task.status}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;
