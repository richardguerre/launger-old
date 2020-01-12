import React from "react";
import { createStore } from "react-hookstore";

import TimePage from './Pages/TimePage/TimePage';

function App() {
  createStore("timer");

  return (
    <div className="App">
      <TimePage />
    </div>
  );
}

export default App;
