import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Timer from "../../Components/Timer/Timer";

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
      <NavBar />
      <Timer minutes={25} seconds={0} onFinish={handleFinish} />
    </div>
  );
};

export default TimePage;
