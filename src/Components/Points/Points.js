import React, { useEffect } from "react";
import { useStore } from "react-hookstore";

import "./Points.css";

const Points = () => {
  const [points, setPoints] = useStore("points");

  useEffect(() => {
    const ticker = setTimeout(() => {
      setPoints(points + 100);
      // TODO: set points in session/local storage
    }, 3000);

    return () => clearTimeout(ticker);
  });

  return (
    <div className="Points">
      <div>{points} Points</div>
    </div>
  );
};

export default Points;
