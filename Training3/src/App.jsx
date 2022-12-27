import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Modal from "./components/Modal";
import { useEffect } from "react";

function App() {
    const [isShow, setIsShow] = useState(false);
    const [content, setContent] = useState("");
    const handleKeyDown = (event) => {
        if (isShow) {
            setContent((prev) => prev + event.key);
        }
    };

    useEffect(() => {
        isShow && window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isShow]);

    return (
        <div>
            <button onClick={() => setIsShow(!isShow)}>Open Modal</button>
            <Modal content={content} setIsShow={setIsShow} isShow={isShow} />
        </div>
    );
}

export default App;
