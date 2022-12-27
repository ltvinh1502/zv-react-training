import React from "react";

const Modal = ({ content, type, isShow, setIsShow }) => {
    return (
        <>
            {isShow ? (
                <div className="border w-60 flex flex-col rounded-2xl">
                    <div>
                        <button onClick={() => setIsShow(!isShow)}>x</button>
                    </div>
                    <h1>Modal</h1>
                    <div>
                        <p>{content}</p>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Modal;
