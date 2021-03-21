import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo512.png";
import logomale from "../../image/male.png";
import logofemale from "../../image/female.png";

function Signupv() {
  return (
    <div className="signup grid_parent grid_twoCol">
      <section className="section_i">
        <img src={logo} alt="" />
        <br />
        <h1>
          Define your gender will let us know bring new features for mother
          health care.
        </h1>
      </section>
      <section className="section_ii">
        <form action="">
          <h1>Let Us Know Your Gender</h1>
          <div className="genders grid_parent grid_twoCol">
            <div className="gender">
              <img src={logomale} alt="" />
              <br />
              <p>Male</p>
            </div>
            <div className="weight">
              <img src={logofemale} alt="" />
              <br />
              <p>Female</p>
            </div>
          </div>
          <Link className="c_width" to="/signup/step6/">
            Next
          </Link>
        </form>
      </section>
    </div>
  );
}

export default Signupv;
