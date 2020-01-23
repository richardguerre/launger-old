import React from "react";

import NavBar from "../../Components/NavBar/NavBar";

import "./BreakPage.css";

const BreakPage = ({history}) => {
  const data = {
    feature: window.sessionStorage.getItem("feature"),
    subFeature: window.sessionStorage.getItem("subFeature")
  };
  console.log(data);

  const handleFinish = () => {
    history.push("/timer");
  };

  return (
    <div className="BreakPage">
      <NavBar minutes={5} seconds={0} showTimer onFinish={handleFinish} />
      <iframe style={{display: "block", margin: "auto", width: "99%", height: "50vw"}} title="Youtube Player" src="https://www.youtube.com/embed/bHQqvYy5KYo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
};

export default BreakPage;
