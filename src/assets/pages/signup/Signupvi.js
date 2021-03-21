import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo512.png";

function Signupvi() {
  return (
    <div className="signup grid_parent grid_twoCol">
      <section className="section_i">
        <img src={logo} alt="" />
        <br />
        <h1>Please provide correct address. This information will keep safe</h1>
      </section>
      <section className="section_ii">
        <form action="">
          <h1>Where Do You Live?</h1>
          <label for="streetaddress">
            Street Address <br />
            <input
              type="text"
              id="streetaddress"
              name="streetaddress"
              placeholder="123/4, Saint Road"
            />
          </label>
          <label for="city">
            City <br />
            <input type="text" id="city" name="city" placeholder="Dhaka" />
          </label>
          <label for="postcode">
            Postcode <br />
            <input
              type="postcode"
              id="postcode"
              name="postcode"
              placeholder="XXXX"
            />
          </label>
          <Link className="c_width" to="/signup/step7/">
            Next
          </Link>
        </form>
      </section>
    </div>
  );
}

export default Signupvi;
