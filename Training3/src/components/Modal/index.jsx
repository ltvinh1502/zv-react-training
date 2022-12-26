import React from "react";

const Modal = ({ content, type, isShow, setIsShow }) => {
    return (
        <>
            {isShow ? (
                <div className="border w-[500px] flex flex-col rounded-2xl">
                    <div>
                        <button onClick={() => setIsShow(!isShow)}>x</button>
                    </div>
                    <span className="font-bold">Type everything</span>
                    <div>
                        <textarea
                            className="bg-blue-300"
                            value={content}
                            readOnly
                        />
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Modal;
