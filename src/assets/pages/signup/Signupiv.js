import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo512.png";
import logoweight from "../../image/weight.png";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function Signupiv() {
  return (
    <div className="signup grid_parent grid_twoCol">
      <section className="section_i">
        <img src={logo} alt="" />
        <br />
        <h1>
          Note: you can not donate blood if you're under weight. Minimum weight
          for donation required 50kg
        </h1>
      </section>
      <section className="section_ii">
        <form action="">
          <h1>How Much Do You Weight</h1>
          <div className="weights grid_parent grid_twoCol">
            <div className="weight">
              <ArrowUpwardIcon className="top_arrow" />
              <img src={logoweight} alt="" />
              <br />
              <p>&lt;50 KG</p>
            </div>
            <div className="weight">
              <ArrowDownwardIcon className="top_arrow" />
              <img src={logoweight} alt="" />
              <br />
              <p>&gt;50 KG</p>
            </div>
          </div>
          <Link className="c_width" to="/signup/step5/">
            Next
          </Link>
        </form>
      </section>
    </div>
  );
}

export default Signupiv;
