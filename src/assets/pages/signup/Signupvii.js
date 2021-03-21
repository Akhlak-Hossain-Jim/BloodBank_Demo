import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo512.png";

function Signupvii() {
  return (
    <div className="signup grid_parent grid_twoCol">
      <section className="section_i">
        <img src={logo} alt="" />
        <br />
        <h1>
          Correct birthdate give you best experience with the community. Don't
          hide it.
        </h1>
      </section>
      <section className="section_ii">
        <form action="">
          <h1>How Old Are You?</h1>
          <label for="years">
            <p className="t_center">I am</p>

            <input type="number" id="years" name="years" placeholder="18" />

            <p className="t_center">Years Old</p>
          </label>
          <label for="date">
            <input type="number" id="date" name="date" placeholder="15" />

            <p className="t_center">Date</p>
          </label>
          <label for="mounth">
            <input
              type="Text"
              id="mounth"
              name="mounth"
              placeholder="January"
            />
            <br />
            <p className="t_center">Mounth</p>
          </label>
          <Link className="c_width" to="/signup/step8/">
            Next
          </Link>
        </form>
      </section>
    </div>
  );
}

export default Signupvii;
