import React from "react";
import { createStore } from "react-hookstore";

import NavBar from "./Components/NavBar/NavBar";
import Timer from "./Components/Timer/Timer";

import "./App.css";

function App() {
  createStore("timer");

  return (
    <div className="App">
      <NavBar />
      <Timer minutes={25} seconds={0} interval={1} />
    </div>
  );
}

export default App;
