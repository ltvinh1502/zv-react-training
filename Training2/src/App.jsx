import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Modal from "./components/Modal";
import Countdown from "./components/Countdown";
import _ from "lodash";
import { useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [isProgress, setIsProgress] = useState(false);
  const [valueNumber, setValueNumber] = useState("");
  const [contentModal, setContentModal] = useState("");
  const inputRef = useRef();
  const checkValue = useCallback(
    _.debounce(() => {
      if (valueNumber.trim().length <= 0) {
        setContentModal("Please input a number");
        setIsShow(true);
      } else if (isNaN(parseFloat(+valueNumber))) {
        setContentModal("Invalid input. Must be a number");
        setIsShow(true);
      } else if (+valueNumber < 0) {
        setContentModal("Number must be greater than 0");
        setIsShow(true);
      } else {
        setIsProgress(true);
        setIsShow(false);
      }
    }, 1000),
    [valueNumber]
  );
  const stopCountdown = () => setIsProgress(false);
  const showModal = () => setIsShow(!isShow);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="w-[600px] h-[300px] flex items-center justify-center">
      <input
        ref={inputRef}
        type="text"
        value={valueNumber}
        className="bg-blue-300 "
        onChange={(e) => setValueNumber(e.target.value)}
      />
      {isProgress ? (
        <div className="flex">
          <button onClick={stopCountdown}>Stop</button>
          <Countdown stopCountdown={stopCountdown} number={valueNumber} />
        </div>
      ) : (
        <button onClick={checkValue}>Start</button>
      )}
      {isShow && <Modal closeModal={showModal} content={contentModal} />}
    </div>
  );
}

export default App;
