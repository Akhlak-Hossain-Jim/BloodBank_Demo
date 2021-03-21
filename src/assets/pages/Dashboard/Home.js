import React from "react";
import { Link } from "react-router-dom";

// icon import

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MapIcon from "@material-ui/icons/Map";
import SettingsIcon from "@material-ui/icons/Settings";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// Image import

import logo from "../../image/logo512.png";
import poster from "../../image/poster 1.png";
import avater from "../../image/male.png";
import cover from "../../image/camp.png";
import map from "../../image/map.png";
import stat from "../../image/stat.png";

function Home() {
  return (
    <div className="dashboard grid_parent grid_fiveCol">
      <nav className="grid_parent">
        <img src={logo} alt="/Dashboard/" />
        <Link className="active" to="">
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
      <section className="dashboard grid_parent grid_fourCol grid_sixRow">
        <header>
          <div className="left_col">
            <h3>Campaign</h3>
            <h6>Available</h6>
            <ToggleOnIcon className="toggleico" />
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
        <section className="rowii_coli">
          <ArrowBackIosIcon className="arrowico" />
          <img src={cover} alt="" />
          <img src={cover} alt="" />
          <img src={cover} alt="" />
          <ArrowForwardIosIcon className="arrowico l" />
        </section>
        <section className="rowiii_coli">
          <h3>Menus</h3>
          <div className="s_container">
            <div className="grid_parent j_center">
              <div className="rounded_demo"></div>
              <span>Book</span>
            </div>
            <div className="grid_parent j_center">
              <div className="rounded_demo"></div>
              <span>Donation</span>
            </div>
            <div className="grid_parent j_center">
              <div className="rounded_demo"></div>
              <span>Donors</span>
            </div>
            <div className="grid_parent j_center">
              <div className="rounded_demo"></div>
              <span>My List</span>
            </div>
          </div>
        </section>
        <section className="rowv_coli">
          <h3>Requests</h3>
          <div className="s_container">
            <div className="grid_parent j_center">
              <div className="rounded_demo"></div>
              <span>
                Urgent
                <br />
                Request
              </span>
            </div>
            <div className="grid_parent j_center">
              <div className="rounded_demo"></div>
              <span>
                My
                <br />
                Request
              </span>
            </div>
            <div className="grid_parent j_center">
              <div className="rounded_demo"></div>
              <span>
                Post
                <br />
                Request
              </span>
            </div>
          </div>
          <img src={stat} alt="" />
        </section>
        <section className="map_container">
          <h3>Map</h3>
          <img src={map} alt="" />
        </section>
      </section>
    </div>
  );
}

export default Home;
