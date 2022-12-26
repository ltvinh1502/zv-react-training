import React from "react";
import { useSelector } from "react-redux";
import { selectTaskList } from "../../services/redux/features/task/taskSlice";
import Todo from "../Todo";

const Todos = () => {
    const taskList = useSelector(selectTaskList);
    return (
        <div className="border border-black p-10">
            <div className="grid-cols-3 grid mb-4">
                <div className="col-span-2 flex items-start pl-5">
                    <span className="font-bold">Task Name</span>
                </div>
                <div>
                    <span className="font-bold">Status</span>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                {taskList?.map((item) => (
                    <Todo key={item.id} task={item} />
                ))}
            </div>
        </div>
    );
};

export default Todos;
