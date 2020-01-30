import React, {useEffect} from "react";
import { useStore} from "react-hookstore";

import NavBar from "../../Components/NavBar/NavBar";
import Timer from "../../Components/Timer/Timer";
import Points from "../../Components/Points/Points";

import "./TimerPage.css";

const TimePage = ({ history }) => {
  // TODO: connect this to feature
  let minutes = 25, seconds = 0, interval = 1;
  let pps = 1;
  let ppm = pps*60 || 100;
  const [timer, setTimer] = useStore("timer");
  const [points, setPoints] = useStore("points");

  // TODO: check if still needed
  // const data = {
  //   feature: window.sessionStorage.getItem("feature"),
  //   subFeature: window.sessionStorage.getItem("subFeature")
  // };
  // console.log(data);

  useEffect(() => {
    setTimer(minutes * 60 + seconds);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const _1secTicker = setTimeout( () => {
      if(timer - interval < 0){
        clearTimeout(_1secTicker);
        handleFinish();
      } else {
        setTimer(timer - interval)
        setPoints(points+ppm/30);
      }
    }, interval*1000)

    return () => {
      clearTimeout(_1secTicker)
    };
  })
  
  const handleFinish = () => {
    history.push("/break");
  };

  return (
    <div className="TimerPage">
      <NavBar Points={() => <Points ppm={ppm}/>} />
      <Timer onFinish={handleFinish} />
    </div>
  );
};

export default TimePage;
