import React from "react";

import Timer from "../../Timer/Timer";

import "./ClassicFt.css";

// TODO: style it
const ClassicFt = () => {
  return (
    <div className="ClassicFt">
      <h1>ClassicFt</h1>
      <Timer minutes={5} />
    </div>
  );
};

export default ClassicFt;
