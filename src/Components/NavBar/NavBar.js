import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "react-hookstore";

import "./NavBar.css";

const NavBar = ({ Timer, Points}) => {
  const [ theme, setTheme] = useStore("theme");

  const toggleTheme = () => {
    setTheme(!theme); //true=light false=dark
    console.log('toggled theme')
  }

  // TODO: take out style attributes on each Link component
  return (
    <div className="NavBar">
      <ul>
        <li style={{ float: "left" }}><Link style={{textDecoration: "none"}} to="/" >Logo</Link></li>
        <li className="actionable" onClick={toggleTheme}>{(theme)?"<Dark>":"<Light>"}</li>
        <li><Link to="/login" style={{textDecoration: "none"}}>Login</Link></li>
        <li><Link to="/signup" style={{textDecoration: "none"}}>Sign Up</Link></li>
        {Timer && <li><Timer /></li>}
        {Points && <li><Points /></li>}
      </ul>
    </div>
  );
};

export default NavBar;
