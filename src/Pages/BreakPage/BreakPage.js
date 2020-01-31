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
    setTimer({time: minutes*60+seconds, isCountingdown: true});
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const ticker = setTimeout(() => {
      if (timer.isCountingdown) {
        if (timer.time - interval < 0) {
          setTimer({...timer, isCountingdown: false});
        } else {
          setTimer({ ...timer, time: timer.time - interval});
        }
      } else {
        if (timer.time % 10 === 0 && timer.time > 0) {
          setPoints(points - 10);
        }
        setTimer({...timer, time: timer.time + interval});
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
      {(timer.time <= 10 || !timer.isCountingdown) && (
        <button onClick={handleFinish}>Get back to studying</button>
      )}
    </div>
  );
};

export default BreakPage;
