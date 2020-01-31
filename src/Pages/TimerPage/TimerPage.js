import React, { useEffect } from "react";
import { useStore } from "react-hookstore";

import NavBar from "../../Components/NavBar/NavBar";
import Timer from "../../Components/Timer/Timer";
import Points from "../../Components/Points/Points";

import "./TimerPage.css";

const TimePage = ({ history }) => {
  // TODO: connect this to Feature's pps and  ppm
  const [timer, setTimer] = useStore("timer");
  const [points, setPoints] = useStore("points");
  let minutes = 0,
    seconds = 5,
    interval = 1;
  let pps = 1,
    ppm = pps * 60 || 100;

  // TODO: check if still needed
  // const data = {
  //   feature: window.sessionStorage.getItem("feature"),
  //   subFeature: window.sessionStorage.getItem("subFeature")
  // };
  // console.log(data);

  useEffect(() => {
    setTimer({...timer, time: minutes*60+seconds});
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const ticker = setTimeout(() => {
      if (timer.time - interval < 0) {
        clearTimeout(ticker);
        handleFinish();
      } else {
        setTimer({...timer, time: timer.time - interval});
        setPoints(points + ppm / 60);
      }
    }, interval * 1000);

    return () => {
      clearTimeout(ticker);
    };
  });

  const addMinute = () => {
    setTimer({...timer, time: timer + 60});
  };

  const handleFinish = () => {
    history.push("/break");
  };

  return (
    <div className="TimerPage">
      <NavBar Points={() => <Points ppm={ppm} />} />
      <Timer />
      {timer.time < 10 && <button onClick={addMinute}>Add a minute!</button>}
    </div>
  );
};

export default TimePage;
