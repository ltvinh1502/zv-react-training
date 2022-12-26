import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Countdown = ({ number, setIsProgress }) => {
    const [numberCountdown, setNumberCountdown] = useState(number);
    useEffect(() => {
        numberCountdown > 0 &&
            setTimeout(() => {
                setNumberCountdown(numberCountdown - 1);
            }, 1000);
        if (numberCountdown <= 0) {
            setIsProgress(false);
        }
    }, [numberCountdown]);

    return <div>{numberCountdown}</div>;
};

export default Countdown;
