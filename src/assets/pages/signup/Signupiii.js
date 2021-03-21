import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo512.png";
// import VisibilityIcon from "@material-ui/icons/Visibility";

function Signupiii() {
  function select() {
    document.querySelector("#selectO").classList.toggle("red");
  }

  return (
    <div className="signup grid_parent grid_twoCol">
      <section className="section_i">
        <img src={logo} alt="" />
        <br />
        <h1>
          Your blood group need to accurate. If you don't know about it please
          contact nearest clinic
        </h1>
      </section>
      <section className="section_ii">
        <form action="">
          <h1>What is Your Blood Group</h1>
          <div className="radios grid_parent grid_threeCol">
            <div className="select" id="selectA+" onClick={select}>
              A+
            </div>
            <div className="select" id="selectA-" onClick={select}>
              A-
            </div>
            <div className="select" id="selectB+" onClick={select}>
              B+
            </div>
            <div className="select" id="selectB-" onClick={select}>
              B-
            </div>
            <div className="select" id="selectO" onClick={select}>
              O+
            </div>
            <div className="select" id="selectO-" onClick={select}>
              O-
            </div>
            <div className="select" id="selectAB+" onClick={select}>
              AB+
            </div>
            <div className="select" id="selectAB-" onClick={select}>
              AB-
            </div>
          </div>
          <Link className="c_width" to="/signup/step4/">
            Next
          </Link>
        </form>
      </section>
    </div>
  );
}

export default Signupiii;
