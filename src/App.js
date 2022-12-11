import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/main.scss";

// pages Importing

import Welcome from "./pages/Welcome";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/signup/";
import Home from "./pages/Dashboard/Home";
import Profile from "./pages/Dashboard/Profile";
import Notification from "./pages/Dashboard/Notification";
import Donor from "./pages/Dashboard/Donor";
import Setting from "./pages/Dashboard/Setting";
import Donations from "./pages/Dashboard/Donations";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/signIn/">
            <SignIn />
          </Route>
          <Route exact path="/signup/">
            <Signup />
          </Route>
          <Route exact path="/Dashboard/">
            <Home />
          </Route>
          <Route exact path="/Dashboard/profile/">
            <Profile />
          </Route>
          <Route exact path="/Dashboard/Donations/">
            <Donations />
          </Route>
          <Route exact path="/Dashboard/notification/">
            <Notification />
          </Route>
          <Route exact path="/Dashboard/donors/">
            <Donor />
          </Route>
          <Route exact path="/Dashboard/settings/">
            <Setting />
          </Route>
          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
