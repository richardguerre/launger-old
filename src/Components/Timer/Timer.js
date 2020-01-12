import React, { useEffect } from "react";
import { useStore } from "react-hookstore";

const Timer = ({ minutes = 1, seconds = 0, interval = 1 }) => {
  const [timer, setTimer] = useStore("timer");

  useEffect(() => {
    setTimer(minutes * 60 + seconds);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const time = setTimeout(() => {
      if (timer - interval <= 0) {
        setTimer(0);
        clearTimeout(timer);
      } else setTimer(timer - interval);
    }, interval*1000);

    return () => clearTimeout(time);
  });

  return (
    <div className="Timer">
      {Math.floor(timer / 60) +
        ":" +
        (Math.floor(timer % 60) >= 10
          ? Math.floor(timer % 60)
          : "0" + Math.floor(timer % 60))}
    </div>
  );
};

export default Timer;
