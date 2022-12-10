import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/main.scss";

// pages Importing

import Welcome from "./pages/Welcome";
import Signin from "./pages/Signin";
import Signup from "./pages/signup/Signup";
import Signupii from "./pages/signup/Signupii";
import PageNotFound from "./pages/PageNotFound";
import Signupiii from "./pages/signup/Signupiii";
import Signupiv from "./pages/signup/Signupiv";
import Signupv from "./pages/signup/Signupv";
import Signupvi from "./pages/signup/Signupvi";
import Signupvii from "./pages/signup/Signupvii";
import Signupf from "./pages/signup/Signupf";
import Home from "./pages/Dashboard/Home";
import Profile from "./pages/Dashboard/Profile";
import Notification from "./pages/Dashboard/Notification";
import Donor from "./pages/Dashboard/Donor";
import Setting from "./pages/Dashboard/Setting";
import Donations from "./pages/Dashboard/Donations";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/signIn/">
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
