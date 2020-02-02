import React from "react";
import { useStore } from "react-hookstore";

import "./FeatureCard.css";


// TODO: Change name, shouldn't be called "Feature"
const Feature = ({name="Classic", subName="Classic", ppm, history}) => {
  // eslint-disable-next-line
  const [ feature, setFeature ] = useStore("feature");
  const handleClick = () => {
    // TODO: set feature in session/local storage ???
    // window.sessionStorage.setItem("feature", name);
    // window.sessionStorage.setItem("subFeature", subName);
    setFeature({name: name, subName: subName, ppm: ppm})
    history.push("/timer");
  }

  return (
    <div className="FeatureCard actionable" onClick={handleClick}>
      <div className="subName">{subName}</div>
      <div className="name">{name}</div>
      <div className="ppm">{ppm}</div>
    </div>
  );
};

export default Feature;
