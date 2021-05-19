import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo512.png";
import logomale from "../../image/male.png";
import logofemale from "../../image/female.png";

function Signupv() {
  const opi = () => {
    document.querySelector("#option-1").style.backgroundColor = "#a7a7a7";
    document.querySelector("#option-2").style.backgroundColor = "#f6f7f9";
    document.querySelector("#male").checked = true;
    document.querySelector("#female").checked = false;
  };

  const opii = () => {
    document.querySelector("#option-2").style.backgroundColor = "#a7a7a7";
    document.querySelector("#option-1").style.backgroundColor = "#f6f7f9";
    document.querySelector("#male").checked = false;
    document.querySelector("#female").checked = true;
  };

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
            <div className="gender" id="option-1" onClick={opi}>
              <img src={logomale} alt="" />
              <input type="radio" name="male" id="male" />
              <p>Male</p>
            </div>
            <div className="weight" id="option-2" onClick={opii}>
              <img src={logofemale} alt="" />
              <input type="radio" name="female" id="female" />
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
