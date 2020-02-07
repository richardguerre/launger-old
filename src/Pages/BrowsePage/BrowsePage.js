import React from "react";

import FeatureCard from "../../Components/FeatureCard/FeatureCard";
import NavBar from "../../Components/NavBar/NavBar";

import "./BrowsePage.css";

const BrowsePage = ({ history, location }) => {
  location.state && console.log(location.state.accessToken);
  const features = [
    {
      name: "Classic",
      subName: "Classic",
      ppm: 100,
      key: 0
    },
    {
      name: "Youtube",
      subName: "trending",
      ppm: 70,
      key: 1
    },
    {
      name: "Youtube",
      subName: "random",
      ppm: 80,
      key: 2
    }
  ];
  return (
    <div className="BrowsePage">
      <NavBar />
      <h1>BrowsePage</h1>
      <div className="Features">
        {features.map(feat => {
          return (
            <FeatureCard
              name={feat.name}
              subName={feat.subName}
              ppm={feat.ppm}
              key={feat.key}
              history={history}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BrowsePage;
