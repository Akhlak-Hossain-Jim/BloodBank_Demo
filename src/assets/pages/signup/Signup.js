import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo512.png";
import VisibilityIcon from "@material-ui/icons/Visibility";

function Signup() {
  return (
    <div className="signup grid_parent grid_twoCol">
      <section className="section_i">
        <img src={logo} alt="" />
        <br />
        <h1>
          Provide your real name for identity. Your name will be used for
          search.
        </h1>
      </section>
      <section className="section_ii">
        <form action="">
          <h1>Let Us Know About You</h1>
          <label for="username">
            Username <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="jhondoe"
            />
          </label>
          <label for="email">
            Email <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="jhondoe@gmail.com"
            />
          </label>
          <label for="password">
            Password <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*****"
            />
          </label>
          <VisibilityIcon
            className="visibility_icon"
            style={{ color: "red" }}
          />
          <Link className="c_width" to="/signup/step2/">
            Next
          </Link>
        </form>
      </section>
    </div>
  );
}

export default Signup;
