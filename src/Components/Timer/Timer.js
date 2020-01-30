import React from "react";
import { useStore } from "react-hookstore";

import './Timer.css';

const Timer = () => {
  const [timer] = useStore("timer");

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
