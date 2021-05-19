import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo512.png";
import logoweight from "../../image/weight.png";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function Signupiv() {
  const opi = () => {
    document.querySelector("#option-1").style.backgroundColor = "#a7a7a7";
    document.querySelector("#option-2").style.backgroundColor = "#f6f7f9";
    document.querySelector("#up50").checked = true;
    document.querySelector("#under50").checked = false;
  };

  const opii = () => {
    document.querySelector("#option-2").style.backgroundColor = "#a7a7a7";
    document.querySelector("#option-1").style.backgroundColor = "#f6f7f9";
    document.querySelector("#up50").checked = false;
    document.querySelector("#under50").checked = true;
  };

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
          <div className="weights">
            <div className="weight" id="option-1" onClick={opi}>
              <ArrowUpwardIcon className="top_arrow" />
              <img src={logoweight} alt="" />
              <p>&lt;50 KG</p>
              <input type="radio" name="up50" id="up50" />
            </div>
            <div className="weight" id="option-2" onClick={opii}>
              <ArrowDownwardIcon className="top_arrow" />
              <img src={logoweight} alt="" />
              <p>&gt;50 KG</p>
              <input type="radio" name="under50" id="under50" />
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
