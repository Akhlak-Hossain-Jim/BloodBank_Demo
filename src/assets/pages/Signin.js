import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo512.png";
import VisibilityIcon from "@material-ui/icons/Visibility";

function Signin() {
  return (
    <div className="signin grid_parent grid_twoCol">
      <img src={logo} alt="" />
      <section>
        <form action="">
          <h1>Sign In</h1>
          <label for="email or name">
            Email or Username
            <br />
            <input
              type="text"
              id="Uemail"
              name="Umail"
              placeholder="jhondoe@gmail.com"
            />
          </label>
          <label for="password">
            Password
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*****"
            />
            <VisibilityIcon
              className="visibility_icon"
              style={{ color: "red" }}
            />
          </label>
          <Link className="c_width" to="/Dashboard/">
            Login
          </Link>
        </form>
        <a className="center lite" href="dhfk">
          Forgot Passward?
        </a>
        <p>
          Don't have an account?&nbsp;
          <Link
            className="dark"
            style={{ color: "#ADADAD" }}
            to="/signup/step1/"
          >
            Sign Up
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Signin;
