import React, { Suspense } from "react";

import NavBar from "../../Components/NavBar/NavBar";
import RenderedFeature from "../../Components/Features/RenderedFeature";

import "./BreakPage.css";

const BreakPage = ({history}) => {
  // TODO: check if still needed
  // const data = {
  //   feature: window.sessionStorage.getItem("feature"),
  //   subFeature: window.sessionStorage.getItem("subFeature")
  // };
  // console.log(data);

  const handleFinish = () => {
    history.push("/timer");
  };

  return (
    <div className="BreakPage">
      <NavBar minutes={5} seconds={0} showTimer onFinish={handleFinish} />
      <Suspense fallback={<div>Loading...</div>}>
        <RenderedFeature />
      </Suspense>
    </div>
  );
};

export default BreakPage;
