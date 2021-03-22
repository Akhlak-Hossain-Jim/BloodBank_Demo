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

// Image import

import logo from "../../image/logo512.png";
import poster from "../../image/poster 1.png";
import avater from "../../image/male.png";
import comenterAvater from "../../image/female.png";

// Components

import Hospitals from "../../components/Hospitals";
import HistoryBox from "../../components/HistoryBox";
import ReviewBox from "../../components/ReviewBox";

function Donations() {
  return (
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
      <section className="dashboard doantion_container twelvehead grid_parent grid_twelveCol grid_fiveRow">
        <header>
          <div className="left_col">
            <Link to="/Dashboard/profile/">
              <ArrowBackIcon className="toggleico" />
              <h3>Donations</h3>
            </Link>
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
        <section className="hospitalDescription">
          <Hospitals
            name="Musa Clinic"
            address="12/3, Loa Angeles, CA"
            time="Monday, 12 Jan, 11:00 PM"
          />
          <Hospitals
            name="Musa Clinic"
            address="12/3, Loa Angeles, CA"
            time="Monday, 12 Jan, 11:00 PM"
          />
        </section>
        <section className="donation_history">
          <h2>History</h2>
          <div className="history_container">
            <h3>You have saved 5 lives, Donated 50 unit</h3>
            <div className="histories">
              <HistoryBox serial="1" name="Kingland Hospital" times="2" />
              <HistoryBox serial="2" name="Kingland Hospital" times="2" />
              <HistoryBox serial="3" name="Kingland Hospital" times="2" />
            </div>
          </div>
        </section>
        <section className="donation_review">
          <h2>Reviews</h2>
          <ReviewBox
            avatar={comenterAvater}
            name="Ayesha Rahman"
            time="Dec 26"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        enim animi. Iste magnam assumenda in? Libero numquam possim."
          />
          <ReviewBox
            avatar={comenterAvater}
            name="Ayesha Rahman"
            time="Dec 26"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        enim animi. Iste magnam assumenda in? Libero numquam possim."
          />
        </section>
      </section>
    </div>
  );
}

export default Donations;
