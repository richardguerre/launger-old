import React from "react";

import Feature from "../../Components/Feature/Feature";

import "./BrowsePage.css";

const BrowsePage = ({history}) => {
  return (
    <div className="BrowsePage">
      <h1>BrowsePage</h1>
      <div className="Features" >
        <Feature name={"Classic"} subName={"Classic"} history={history} />
        <Feature name={"Youtube"} subName={"trending"} history={history} />
        <Feature name={"Youtube"} subName={"random"} history={history} />
      </div>
    </div>
  );
};

export default BrowsePage;
