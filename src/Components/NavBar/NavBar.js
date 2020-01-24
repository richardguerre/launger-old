import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "react-hookstore";

import Timer from "../Timer/Timer";
import Points from "../Points/Points";

import "./NavBar.css";

const NavBar = ({minutes=5, seconds=0, onFinish, showTimer=false}) => {
  const [ theme, setTheme] = useStore("theme");

  const toggleTheme = () => {
    setTheme(!theme); //true=light false=dark
    console.log('toggled theme')
  }

  return (
    <div className="NavBar">
      <ul>
        <li style={{ float: "left" }}><Link style={{textDecoration: "none"}} to="/" >Logo</Link></li>
        <li onClick={toggleTheme}>|O|</li>
        {showTimer && <li>
          <Timer minutes={minutes} seconds={seconds} onFinish={() => {console.log("Time's up!"); onFinish();}}/>
        </li>}
        <li><Points /></li>
      </ul>
    </div>
  );
};

export default NavBar;
