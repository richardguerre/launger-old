import React from "react";

import "./Feature.css";

const Feature = ({name, subName="", history}) => {
  const handleClick = () => {
    // TODO: set feature in session/local storage ???
    // window.sessionStorage.setItem("feature", name);
    // window.sessionStorage.setItem("subFeature", subName);
    history.push("/timer");
  }

  return (
    <div className="Feature" onClick={handleClick}>
      <div className="subName">{subName}</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default Feature;
