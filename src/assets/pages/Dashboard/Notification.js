import React from "react";
import { Link } from "react-router-dom";

// icon import

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MapIcon from "@material-ui/icons/Map";
import SettingsIcon from "@material-ui/icons/Settings";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShareIcon from "@material-ui/icons/Share";

// Image import

import logo from "../../image/logo512.png";
import poster from "../../image/poster 1.png";
import avater from "../../image/male.png";

// Components

function NotificationBox({ group, name }) {
  return (
    <div className="notificationBox">
      <div className="bloodGroup">
        <h4>{group}</h4>
      </div>
      <div className="notificationDetaile">
        <p>
          <span className="name">{name}</span> Posted a blood request near you.
        </p>
      </div>
      <div className="timeAgo">
        <br />
        <span>1</span>&nbsp;<span>min</span>&nbsp;ago
      </div>
    </div>
  );
}

const shareIcon = <ShareIcon />;

function Notification() {
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
        <Link className="active" to="/Dashboard/notification/">
          <NotificationsIcon className="dashboardico" />
          Notifications
        </Link>
        <Link to="/Dashboard/donors/">
          <MapIcon className="dashboardico" />
          Donors
        </Link>
        <Link to="/Dashboard/settings/">
          <SettingsIcon className="dashboardico" />
          Setting
        </Link>
        <img className="poster" src={poster} alt="" />
      </nav>
      <section className="dashboard twelvehead notification_container grid_parent grid_twelveCol">
        <header>
          <div className="left_col">
            <ArrowBackIcon className="toggleico" />
            <h3>Notification</h3>
          </div>
          <div className="middle_col">
            <h3>History</h3>
          </div>
          <div className="right_col">
            <div>
              <h3>Jhon Doe</h3>
              <h6>Top Rated Donor</h6>
            </div>
            <img src={avater} alt="" />
            <MoreVertIcon className="vertico" />
          </div>
        </header>
        <section className="notifications">
          <h4>Today</h4>
          <NotificationBox name="Musa Clinic" group="A+" />
          <NotificationBox name="Musa Clinic" group="A+" />
          <NotificationBox name="Musa Clinic" group={shareIcon} />
          <h4>Yesterday</h4>
          <NotificationBox name="Musa Clinic" group="A+" />
          <NotificationBox name="Musa Clinic" group="A+" />
          <NotificationBox name="Musa Clinic" group={shareIcon} />
          <h4>Yesterday</h4>
          <NotificationBox name="Musa Clinic" group="A+" />
          <NotificationBox name="Musa Clinic" group="A+" />
          <NotificationBox name="Musa Clinic" group={shareIcon} />
        </section>

        <section className="History">
          <h4>Today</h4>
          <NotificationBox name="Musa Clinic" group="A+" />
          <NotificationBox name="Musa Clinic" group="A+" />
          <NotificationBox name="Musa Clinic" group={shareIcon} />
          <h4>Yesterday</h4>
          <NotificationBox name="Musa Clinic" group="A+" />
          <NotificationBox name="Musa Clinic" group="A+" />
          <NotificationBox name="Musa Clinic" group={shareIcon} />
        </section>
      </section>
    </div>
  );
}

export default Notification;
