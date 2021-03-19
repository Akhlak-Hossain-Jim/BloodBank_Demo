import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/style.css";

// pages Importing

import Welcome from "./assets/pages/Welcome";
import Signin from "./assets/pages/Signin";
import Signup from "./assets/pages/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        {/* <Route exact path='/start/'>
          <GettingStarted />
        </Route> */}
        <Route exact path="/signin/">
          <Signin />
        </Route>
        <Route exact path="/signup/">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
