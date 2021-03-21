import React from "react";
import { Link } from "react-router-dom";

// icon import

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MapIcon from "@material-ui/icons/Map";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// Image import

import logo from "../../image/logo512.png";
import poster from "../../image/poster 1.png";
import avater from "../../image/male.png";
import profileImage from "../../image/avater1.jpg";

// Componets

function Badge(props) {
  return (
    <div className="grid_parent j_center badge">
      <div className="rounded_demo"></div>
      <span className="badge_name">{props.name}</span>
    </div>
  );
}

function Appoinment({ month, day, hospitalName, quantity, dayLeft }) {
  return (
    <div className="appoinment">
      <div className="date">
        <div className="month">{month}</div>
        <h1>{day}</h1>
      </div>
      <div className="hospital_name">
        <h6>{hospitalName}</h6>
        <div className="quantity">
          <span>{quantity}</span>Bag Blood
        </div>
      </div>
      <div className="day_left">
        <span>{dayLeft}</span> days ago
      </div>
    </div>
  );
}

function Profile() {
  function navChangei() {
    document.querySelector("#itemi").classList.add("active");
    document.querySelector("#itemii").classList.remove("active");
    document.querySelector("#donation").classList.remove("drown");
    document.querySelector("#request").classList.add("drown");
  }

  function navChangeii() {
    document.querySelector("#itemi").classList.remove("active");
    document.querySelector("#itemii").classList.add("active");
    document.querySelector("#request").classList.remove("drown");
    document.querySelector("#donation").classList.add("drown");
  }

  return (
    <div>
      <div className="dashboard grid_parent grid_fiveCol">
        <nav className="grid_parent">
          <img src={logo} alt="" />
          <Link to="/Dashboard/">
            <HomeIcon className="dashboardico" />
            Home
          </Link>
          <Link className="active" to="/Dashboard/profile/">
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
        <section className="dashboard twelvehead profile_container grid_parent grid_twelveCol grid_sixRow">
          <header>
            <div className="left_col">
              <ArrowBackIcon className="toggleico" />
              <h3>Requests</h3>
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
          <section className="profile grid_parent">
            <div className="profile_box">
              <div className="cover_container">
                <img src={profileImage} alt="" />
                <div className="title_container">
                  <h1>Ashu Priya</h1>
                  <h6>Beginner Donor</h6>
                </div>
              </div>
              <div className="details_container">
                <div className="info">
                  <h4>Info</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, illo vel? Velit magnam ea fuga quibusdam, voluptatibus
                    blanditiis facilis. Debitis ducimus ullam sint maxime
                    magnam.
                  </p>
                </div>
                <div className="badgeContainer">
                  <h4>Badge</h4>
                  <div className="s_container">
                    <Badge name="Life Saver" />
                    <Badge name="Life Saver" />
                    <Badge name="Fast" />
                  </div>
                </div>
                <hr />
                <div className="progress_bar">
                  <div className="progress"></div>
                  <p>
                    <span>3</span> days until you can donate again.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="Status">
            <div className="nav">
              <span className="nav_item active" id="itemi" onClick={navChangei}>
                Donations
              </span>
              <span className="nav_item" id="itemii" onClick={navChangeii}>
                Requests
              </span>
            </div>
            <div id="donation">
              <Appoinment
                month="Dec"
                day="7"
                hospitalName="IBN Shinah"
                quantity="1"
                dayLeft="6"
              />
              <Appoinment
                month="Dec"
                day="7"
                hospitalName="IBN Shinah"
                quantity="1"
                dayLeft="6"
              />
              <Appoinment
                month="Dec"
                day="7"
                hospitalName="IBN Shinah"
                quantity="1"
                dayLeft="6"
              />
              <Link to="/Dashboard/donations/">See more...</Link>
            </div>
            <div className="drown" id="request">
              <Appoinment
                month="Jan"
                day="17"
                hospitalName="IBN Shinah"
                quantity="1"
                dayLeft="6"
              />
              <Appoinment
                month="Jan"
                day="17"
                hospitalName="IBN Shinah"
                quantity="1"
                dayLeft="6"
              />
              <Appoinment
                month="Jan"
                day="17"
                hospitalName="IBN Shinah"
                quantity="1"
                dayLeft="6"
              />
              <Link to="/Dashboard/profile/">See more...</Link>
            </div>
          </section>
          <section className="badges">
            <h4>Badges</h4>
            <div className="s_container">
              <Badge name="Life Saver" />
              <Badge name="Fast" />
              <Badge name="Certified" />
              <Badge name="Superman" />
              <Badge name="50 Life" />
              <Badge name="Life Saver" />
              <Badge name="Clean" />
              <Badge name="Protector" />
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Profile;
