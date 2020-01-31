import React from "react";
import { useStore } from "react-hookstore";

import './Timer.css';

const Timer = () => {
  const [timer] = useStore("timer");
  const { time } = timer;

  return (
    <div className="Timer">
      {(Math.floor(time / 60) >= 10
          ? Math.floor(time / 60)
          : "0" + Math.floor(time / 60)) +
        ":" +
        (Math.floor(time % 60) >= 10
          ? Math.floor(time % 60)
          : "0" + Math.floor(time % 60))}
    </div>
  );
};

export default Timer;
