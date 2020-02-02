import React, {useState, useEffect} from "react";
import { useStore } from "react-hookstore";

import './Timer.css';

const Timer = () => {
  const [timer] = useStore("timer");
  const { time } = timer;
  const [ bg, setBg] = useState({backgroundColor: "blue"});

  // TODO: figure out dynamic styling for timer
  useEffect(() => {
    if(timer.isCountingdown){
      setBg({backgroundColor: "blue"});
    } else {
      setBg({backgroundColor: "red"});
    }
  }, [timer.isCountingdown])

  return (
    <div className="Timer" style={bg}>
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
