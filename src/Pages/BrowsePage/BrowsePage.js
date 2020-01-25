import React from "react";

import FeatureCard from "../../Components/FeatureCard/FeatureCard";

import "./BrowsePage.css";

const BrowsePage = ({history}) => {
  return (
    <div className="BrowsePage">
      <h1>BrowsePage</h1>
      <div className="Features" >
        <FeatureCard name={"Classic"} subName={"Classic"} history={history} />
        <FeatureCard name={"Youtube"} subName={"trending"} history={history} />
        <FeatureCard name={"Youtube"} subName={"random"} history={history} />
      </div>
    </div>
  );
};

export default BrowsePage;
