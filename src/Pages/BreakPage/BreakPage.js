import React, { Suspense, lazy } from "react";
import { useStore } from "react-hookstore";

import NavBar from "../../Components/NavBar/NavBar";

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

// TODO: put in seperate file
//Classic
const ClassicFt = lazy(()=> import("../../Components/Features/Classic/ClassicFt"));
//Youtube
const TrendingYtFt = lazy(() => import("../../Components/Features/Youtube/Trending/TrendingYtFt"));
const RandomYtFt = lazy(() => import("../../Components/Features/Youtube/Random/RandomYtFt"));

// TODO: put in seperate file
const RenderedFeature = () => {
  const [ feature ] = useStore("feature");
  console.log(feature);
  const { name, subName} = feature;
  // TODO: turn if statement tree into switch case
  switch(name) {
    case "Youtube":
      switch(subName){
        case "trending":
          return <TrendingYtFt />
        default: // "random"
          return <RandomYtFt />
      }
    default: 
      return <ClassicFt />
  }
}

export default BreakPage;
