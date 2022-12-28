import React from "react";

const Modal = ({ content, closeModal }) => {
  return (
    <div className="border w-60 flex flex-col rounded-2xl">
      <button onClick={closeModal}>x</button>
      <h1>Modal</h1>
      <p>{content}</p>
    </div>
  );
};

export default Modal;
