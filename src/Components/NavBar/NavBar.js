import React from "react";

import Timer from "../Timer/Timer";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li style={{ float: "left" }}>Logo</li>
        <li>|O|</li>
        <li>
          <Timer />
        </li>
        <li>1299pts</li>
      </ul>
    </div>
  );
};

export default NavBar;
