import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Countdown = ({ number, stopCountdown }) => {
    const [numberCountdown, setNumberCountdown] = useState(number);
    useEffect(() => {
        numberCountdown > 0 &&
            setTimeout(() => {
                setNumberCountdown(numberCountdown - 1);
            }, 1000);
        if (numberCountdown <= 0) {
            stopCountdown();
        }
    }, [numberCountdown]);

    return <>{numberCountdown}</>;
};

export default Countdown;
