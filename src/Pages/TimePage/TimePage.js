import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Timer from "../../Components/Timer/Timer";

import "./TimePage.css";

const IndexPage = () => {
  return (
    <div className="TimePage">
      <NavBar />
      <Timer minutes={25} seconds={0} interval={1} />
    </div>
  );
};

export default IndexPage;
