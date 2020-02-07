import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "react-hookstore";
import firebase from "firebase/app";
import "./Helpers/Firebase";

//TODO: lazy load pages
import IndexPage from "./Pages/IndexPage/IndexPage";
import BrowsePage from "./Pages/BrowsePage/BrowsePage";
import TimerPage from "./Pages/TimerPage/TimerPage";
import BreakPage from "./Pages/BreakPage/BreakPage";
import NotFound from "./Pages/NotFound/NotFound"; 
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";

function App() {
  // TODO: put inside useEffect()
  firebase.auth().onAuthStateChanged( (user) => {
    console.log(user);
  })
  createStore("timer", {time: 0, isCountingdown: true});
  createStore("theme", true);
  createStore("feature", {name: "Classic", subName: "Classic", ppm: 100});
  createStore("points", 0);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/browse" component={BrowsePage} />
          <Route path="/timer" component={TimerPage} />
          <Route path="/break" component={BreakPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route exact path="/djehuiroq8igbh8qpinurf839niueshf0239hfnudihr9pi23298fnr9wnu923ni98ewniuh9we" component={() => <h1>Created by Richard M. GUERRE</h1>} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
