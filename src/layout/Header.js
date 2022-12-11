import React from "react";
import { Link, useLocation } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function Header({ show, setShow }) {
  const location = useLocation();
  return (
    <header>
      {
        {
          dashboard: (
            <div className="left_col">
              <h3>Campaign</h3>
              <div>
                <h6>Available</h6>
              </div>
            </div>
          ),
          dashboarddonations: (
            <div className="left_col">
              <Link to="/Dashboard/profile/">
                <ArrowBackIcon className="toggleIco" />
                <h3>Donations</h3>
              </Link>
            </div>
          ),
          dashboardprofile: (
            <div className="left_col">
              <Link to="/Dashboard/Donations/">
                <ArrowBackIcon className="toggleIco" />
                <h3>Requests</h3>
              </Link>
            </div>
          ),
          dashboardnotification: (
            <div className="left_col">
              <ArrowBackIcon className="toggleIco" />
              <h3>Notification</h3>
            </div>
          ),
        }[location.pathname.replaceAll("/", "").toLowerCase()]
      }
      <div className="right_col">
        <div>
          <h3>Jhon Doe</h3>
          <h6>Top Rated Donor</h6>
        </div>
        <img src={`/image/male.png`} alt="" />
        <MoreVertIcon className="vertigo" onClick={() => setShow(!show)} />
      </div>
    </header>
  );
}
