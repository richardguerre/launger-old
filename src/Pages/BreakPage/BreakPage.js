import React, { Suspense } from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Timer from "../../Components/Timer/Timer";
import Points from "../../Components/Points/Points";
import RenderedFeature from "../../Components/Features/RenderedFeature";

import "./BreakPage.css";

const BreakPage = ({ history }) => {
  // TODO: check if still needed
  // const data = {
  //   feature: window.sessionStorage.getItem("feature"),
  //   subFeature: window.sessionStorage.getItem("subFeature")
  // };
  // console.log(data);

  const handleFinish = () => {
    console.log("Time's up!!!")
    history.push("/timer");
  };

  return (
    <div className="BreakPage">
      <NavBar
        Timer={() => (<Timer minutes={5} seconds={0} onFinish={handleFinish} />)}
        Points={() => (<Points />)}
      />
      <Suspense fallback={<h1>Loading...</h1>}>
        <RenderedFeature />
      </Suspense>
    </div>
  );
};

export default BreakPage;
