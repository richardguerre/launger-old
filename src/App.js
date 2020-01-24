import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "react-hookstore";

import IndexPage from "./Pages/IndexPage/IndexPage";
import BrowsePage from "./Pages/BrowsePage/BrowsePage";
import TimerPage from "./Pages/TimerPage/TimerPage";
import BreakPage from "./Pages/BreakPage/BreakPage";
import NotFound from "./Pages/NotFound/NotFound"; 

function App() {
  createStore("timer");
  createStore("theme");
  createStore("points", 0);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/browse" component={BrowsePage} />
          <Route path="/timer" component={TimerPage} />
          <Route path="/break" component={BreakPage} />
          <Route exact path="/djehuiroq8igbh8qpinurf839niueshf0239hfnudihr9pi23298fnr9wnu923ni98ewniuh9we" component={() => <h1>Created by Richard GUERRE</h1>} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
