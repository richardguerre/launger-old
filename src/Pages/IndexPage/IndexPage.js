import React from "react";
import { Redirect } from "react-router-dom";

import "./IndexPage.css";

//  TODO Route to index page
const IndexPage = () => {
  return (
    <div className="IndexPage">
      <h1>IndexPage</h1>
      <Redirect to="/browse"/>
    </div>
  );
};

export default IndexPage;
