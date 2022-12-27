import React from "react";
import Todo from "../Todo";

const Todos = ({ todos }) => {
    return (
        <div className="m-8 flex flex-col gap-4">
            {todos?.map((item) => (
                <Todo
                    key={item?.id}
                    id={item?.id}
                    name={item?.name}
                    completed={item?.completed}
                />
            ))}
        </div>
    );
};

export default Todos;
