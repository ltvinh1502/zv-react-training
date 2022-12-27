import React from "react";
import Todos from "../../components/Todos";
import { selectStatusNetwork } from "../../services/redux/features/network/networkSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { taskActions } from "../../services/redux/features/task/taskSlice";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const Home = () => {
    const statusNetwork = useSelector(selectStatusNetwork);
    const dispatch = useDispatch();
    const [task, setTask] = useState("");
    const handleAddTask = () => {
        dispatch(
            taskActions.addTask({
                id: uuidv4(),
                content: task,
                status: "draft",
            })
        );
        setTask("");
    };
    useEffect(() => {
        if (statusNetwork === "online") {
            dispatch(taskActions.autoSubmitting());
        }
    }, [statusNetwork]);

    return (
        <div className="flex flex-col max-w-screen-lg w-screen">
            <div className="flex items-end justify-end">
                <span>Network: {statusNetwork}</span>
            </div>
            <div className="my-2">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter Task Name"
                />
                <button onClick={handleAddTask}>+ Task</button>
            </div>
            <Todos />
        </div>
    );
};

export default Home;
