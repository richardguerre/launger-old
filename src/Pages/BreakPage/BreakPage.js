import React, { useEffect, Suspense } from "react";
import { useStore } from "react-hookstore";

import NavBar from "../../Components/NavBar/NavBar";
import Timer from "../../Components/Timer/Timer";
import Points from "../../Components/Points/Points";
import RenderedFeature from "../../Components/Features/RenderedFeature";

import "./BreakPage.css";

const BreakPage = ({ history }) => {
  const [timer, setTimer] = useStore("timer");
  const [points, setPoints] = useStore("points");
  const [timerState, setState] = useStore("timerState");
  // TODO: Change this!!
  let minutes = 0,
    seconds = 5,
    interval = 1;

  // TODO: check if still needed
  // const data = {
  //   feature: window.sessionStorage.getItem("feature"),
  //   subFeature: window.sessionStorage.getItem("subFeature")
  // };
  // console.log(data);

  useEffect(() => {
    setTimer(minutes * 60 + seconds);
    setState(false);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const ticker = setTimeout(() => {
      if (!timerState) {
        if (timer - interval < 0) {
          setState(true);
        } else {
          setTimer(timer - interval);
        }
      } else {
        if (timer % 10 === 0 && timer > 0) {
          setPoints(points - 10);
        }
        setTimer(timer + interval);
      }
    }, interval * 1000);

    return () => {
      clearTimeout(ticker);
    };
  });

  const handleFinish = () => {
    history.push("/timer");
  };

  return (
    <div className="BreakPage">
      <NavBar Timer={Timer} Points={Points} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <RenderedFeature />
      </Suspense>
      {(timer <= 10 || timerState) && (
        <button onClick={handleFinish}>Get back to studying</button>
      )}
    </div>
  );
};

export default BreakPage;
