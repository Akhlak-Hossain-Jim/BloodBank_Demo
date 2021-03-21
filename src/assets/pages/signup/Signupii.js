import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo512.png";
// import VisibilityIcon from "@material-ui/icons/Visibility";

function Signupii() {
  return (
    <div className="signup grid_parent grid_twoCol">
      <section className="section_i">
        <img src={logo} alt="" />
        <br />
        <h1>
          Please provide correct phone no. This information will keep safe.
        </h1>
      </section>
      <section className="section_ii">
        <form action="">
          <h1>Contact Information</h1>
          <label for="username">
            Phone No <br />
            <input type="tel" id="PhoneNo" name="PhoneNo" placeholder="018" />
          </label>
          <label for="altphoneno">
            Alternative Phone No <br />
            <input
              type="tel"
              id="altphoneno"
              name="altphoneno"
              placeholder="017"
            />
          </label>
          <label for="Social">
            Social (Optional) <br />
            <input
              type="url"
              id="sociallink"
              name="Social"
              placeholder="https://"
            />
          </label>
          {/* <VisibilityIcon
            className="visibility_icon"
            style={{ color: "red" }}
          /> */}
          <Link className="c_width" to="/signup/step3/">
            Next
          </Link>
        </form>
      </section>
    </div>
  );
}

export default Signupii;
