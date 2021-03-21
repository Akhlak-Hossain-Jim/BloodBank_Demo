import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/style.css";

// pages Importing

import Welcome from "./assets/pages/Welcome";
import Signin from "./assets/pages/Signin";
import Signup from "./assets/pages/signup/Signup";
import Signupii from "./assets/pages/signup/Signupii";
import PageNotFound from "./assets/pages/PageNotFound";
import Signupiii from "./assets/pages/signup/Signupiii";
import Signupiv from "./assets/pages/signup/Signupiv";
import Signupv from "./assets/pages/signup/Signupv";
import Signupvi from "./assets/pages/signup/Signupvi";
import Signupvii from "./assets/pages/signup/Signupvii";
import Signupf from "./assets/pages/signup/Signupf";
import Home from "./assets/pages/Dashboard/Home";
import Profile from "./assets/pages/Dashboard/Profile";
import Notification from "./assets/pages/Dashboard/Notification";
import Donor from "./assets/pages/Dashboard/Donor";
import Setting from "./assets/pages/Dashboard/Setting";
import Donations from "./assets/pages/Dashboard/Donations";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/signin/">
          <Signin />
        </Route>
        <Route exact path="/signup/step1/">
          <Signup />
        </Route>
        <Route exact path="/signup/step2/">
          <Signupii />
        </Route>
        <Route exact path="/signup/step3/">
          <Signupiii />
        </Route>
        <Route exact path="/signup/step4/">
          <Signupiv />
        </Route>
        <Route exact path="/signup/step5/">
          <Signupv />
        </Route>
        <Route exact path="/signup/step6/">
          <Signupvi />
        </Route>
        <Route exact path="/signup/step7/">
          <Signupvii />
        </Route>
        <Route exact path="/signup/step8/">
          <Signupf />
        </Route>
        <Route exact path="/Dashboard/">
          <Home />
        </Route>
        <Route exact path="/Dashboard/profile/">
          <Profile />
        </Route>
        <Route exact path="/Dashboard/donations/">
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
  );
}

export default App;
