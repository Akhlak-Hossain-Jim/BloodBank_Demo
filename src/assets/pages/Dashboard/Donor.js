import React from "react";
import { Link } from "react-router-dom";

// icon import

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MapIcon from "@material-ui/icons/Map";
import SettingsIcon from "@material-ui/icons/Settings";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// Image import

import logo from "../../image/logo512.png";
import poster from "../../image/poster 1.png";
import avater from "../../image/male.png";

function Donor() {
  return (
    <div className="dashboard grid_parent grid_fiveCol">
      <nav className="grid_parent">
        <img src={logo} alt="" />
        <Link to="/Dashboard/">
          <HomeIcon className="dashboardico" />
          Home
        </Link>
        <Link to="/Dashboard/profile/">
          <PersonIcon className="dashboardico" />
          Profile
        </Link>
        <Link to="/Dashboard/notification/">
          <NotificationsIcon className="dashboardico" />
          Notifications
        </Link>
        <Link className="active" to="/Dashboard/donors/">
          <MapIcon className="dashboardico" />
          Donors
        </Link>
        <Link to="/Dashboard/settings/">
          <SettingsIcon className="dashboardico" />
          Setting
        </Link>
        <img className="poster" src={poster} alt="" />
      </nav>
      <section className="dashboard grid_parent grid_fourCol grid_sixRow">
        <header>
          <div className="left_col"></div>
          <div className="right_col">
            <div>
              <h3>Jhon Doe</h3>
              <h6>Top Rated Donor</h6>
            </div>
            <img src={avater} alt="" />
            <MoreVertIcon className="vertico" />
          </div>
        </header>
      </section>
    </div>
  );
}

export default Donor;
