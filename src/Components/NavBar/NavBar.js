import React from "react";

import Timer from "../Timer/Timer";

import './NavBar.css'

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li>Logo</li>
        <li style={{float:"right"}}>Theme Mode</li>
        <li style={{float:"right"}}>
          <Timer />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
