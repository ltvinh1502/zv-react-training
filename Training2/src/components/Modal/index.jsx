import React from "react";

const Modal = ({ content, onShowModal }) => {
  return (
    <div className="border w-60 flex flex-col rounded-2xl">
      <button onClick={onShowModal}>x</button>
      <h1>Modal</h1>
      <p>{content}</p>
    </div>
  );
};

export default Modal;
