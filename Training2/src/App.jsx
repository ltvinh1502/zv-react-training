import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Modal from "./components/Modal";
import Countdown from "./components/Countdown";

function App() {
    const [isShow, setIsShow] = useState(false);
    const [isProgress, setIsProgress] = useState(false);
    const [valueNumber, setValueNumber] = useState("");
    const [contentModal, setContentModal] = useState("");

    const checkValue = () => {
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
    };

    return (
        <div className="w-[600px] h-[300px] flex items-center justify-center">
            <input
                type="text"
                value={valueNumber}
                className="bg-blue-300 "
                onChange={(e) => setValueNumber(e.target.value)}
            />
            {isProgress ? (
                <div className="flex">
                    <button onClick={() => setIsProgress(false)}>Stop</button>
                    <Countdown
                        setIsProgress={setIsProgress}
                        number={valueNumber}
                    />
                </div>
            ) : (
                <div>
                    <button onClick={checkValue}>Start</button>
                </div>
            )}
            <Modal
                isShow={isShow}
                setIsShow={setIsShow}
                content={contentModal}
            />
        </div>
    );
}

export default App;
