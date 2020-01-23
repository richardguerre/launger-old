import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Timer from "../../Components/Timer/Timer";

import "./TimePage.css";

const TimePage = ({ history }) => {
  const data = {
    feature: window.sessionStorage.getItem("feature"),
    subFeature: window.sessionStorage.getItem("subFeature")
  };
  console.log(data);

  const handleFinish = () => {
    history.push("/break");
  };

  return (
    <div className="TimePage">
      <NavBar />
      <Timer minutes={10} seconds={0} onFinish={handleFinish} />
    </div>
  );
};

export default TimePage;
