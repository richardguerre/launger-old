import React, { useEffect } from "react";
import { useStore } from "react-hookstore";

import './Timer.css';

const Timer = ({ minutes = 1, seconds = 0, interval = 1, onFinish }) => {
  const [timer, setTimer] = useStore("timer");

  useEffect(() => {
    setTimer(minutes * 60 + seconds);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const ticker = setTimeout(() => {
      if (timer - interval < 0) {
        clearTimeout(ticker);
        onFinish();
      } else setTimer(timer - interval);
    }, interval * 1000);
    return () => clearTimeout(ticker);
  });

  return (
    <div className="Timer">
      {(Math.floor(timer / 60) >= 10
          ? Math.floor(timer / 60)
          : "0" + Math.floor(timer / 60)) +
        ":" +
        (Math.floor(timer % 60) >= 10
          ? Math.floor(timer % 60)
          : "0" + Math.floor(timer % 60))}
    </div>
  );
};

export default Timer;
