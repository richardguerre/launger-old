import React from "react";
import { useStore } from "react-hookstore";

import "./Points.css";

const Points = ({ppm}) => {
  const [points] = useStore("points");

  return (
    <div className="Points">
      {/* <div>{Math.round(points)} Points</div> */}
      <div>{Math.round(points - points%ppm)} Points</div>
    </div>
  );
};

export default Points;
