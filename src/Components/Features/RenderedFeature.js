import React, { lazy } from "react";
import { useStore } from "react-hookstore";

//Classic
const ClassicFt = lazy(()=> import("./Classic/ClassicFt"));
//Youtube
const TrendingYtFt = lazy(() => import("./Youtube/Trending/TrendingYtFt"));
const RandomYtFt = lazy(() => import("./Youtube/Random/RandomYtFt"));

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

export default RenderedFeature;
