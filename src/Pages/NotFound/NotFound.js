import React from "react";
import {Link} from "react-router-dom"

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>404 Could not find page</h1>
      <Link to="/">Main Page</Link>{" "}
    </div>
  );
};

export default NotFound;
