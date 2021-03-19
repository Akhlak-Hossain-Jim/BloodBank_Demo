import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo512.png";
import "../../css/style.css";

// logo521.png

function Welcome() {
  return (
    <div className="welcome">
      <img src={logo} alt="" />
      <Link className="red_w" to="/signin/">
        Start Journey
      </Link>
    </div>
  );
}

export default Welcome;
