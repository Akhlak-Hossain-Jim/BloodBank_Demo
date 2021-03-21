import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo512.png";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

function Signupf() {
  return (
    <div className="signup grid_parent grid_twoCol">
      <section className="section_i">
        <img src={logo} alt="" />
        <br />
        <h1>
          Please do not use a model or doll avatar. Please keep faith on
          yourself you're beautiful too.
        </h1>
      </section>
      <section className="section_ii">
        <form action="">
          <h1>You're Almost Done</h1>
          <div className="file_upload">
            <input
              class="file-upload-input"
              type="file"
              onchange="readURL(this);"
              accept="image/*"
            />
            <div class="drag-text center">
              <CloudUploadIcon className="upico" />
              <h3>Upload A Photo</h3>
            </div>
          </div>
          <Link className="c_width" to="/signin">
            Start Journey
          </Link>
        </form>
      </section>
    </div>
  );
}

export default Signupf;
