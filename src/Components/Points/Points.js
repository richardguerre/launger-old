import React from "react";
import { useStore } from "react-hookstore";

import "./Points.css";

const Points = ({ppm}) => {
  const [points] = useStore("points");

  return (
    <div className="Points">
      <div>{(ppm)?Math.round(points - points%ppm):Math.round(points)} Points</div>
    </div>
  );
};

export default Points;
