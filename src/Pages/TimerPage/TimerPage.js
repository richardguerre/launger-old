import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Timer from "../../Components/Timer/Timer";
import Points from "../../Components/Points/Points";

import "./TimerPage.css";

const TimePage = ({ history }) => {
  // TODO: check if still needed
  // const data = {
  //   feature: window.sessionStorage.getItem("feature"),
  //   subFeature: window.sessionStorage.getItem("subFeature")
  // };
  // console.log(data);
  const handleFinish = () => {
    history.push("/break");
  };

  return (
    <div className="TimerPage">
      <NavBar Points={() => <Points />} />
      <Timer minutes={0} seconds={5} onFinish={handleFinish} />
    </div>
  );
};

export default TimePage;
