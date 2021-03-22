import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo512.png";
// import VisibilityIcon from "@material-ui/icons/Visibility";

function Signupiii() {
  function selectA() {
    document.querySelector("#selectA").classList.add("red");
    document.querySelector("#selectAi").classList.remove("red");
    document.querySelector("#selectB").classList.remove("red");
    document.querySelector("#selectBi").classList.remove("red");
    document.querySelector("#selectO").classList.remove("red");
    document.querySelector("#selectOi").classList.remove("red");
    document.querySelector("#selectAB").classList.remove("red");
    document.querySelector("#selectABi").classList.remove("red");
  }
  function selectAi() {
    document.querySelector("#selectA").classList.remove("red");
    document.querySelector("#selectAi").classList.add("red");
    document.querySelector("#selectB").classList.remove("red");
    document.querySelector("#selectBi").classList.remove("red");
    document.querySelector("#selectO").classList.remove("red");
    document.querySelector("#selectOi").classList.remove("red");
    document.querySelector("#selectAB").classList.remove("red");
    document.querySelector("#selectABi").classList.remove("red");
  }
  function selectB() {
    document.querySelector("#selectA").classList.remove("red");
    document.querySelector("#selectAi").classList.remove("red");
    document.querySelector("#selectB").classList.add("red");
    document.querySelector("#selectBi").classList.remove("red");
    document.querySelector("#selectO").classList.remove("red");
    document.querySelector("#selectOi").classList.remove("red");
    document.querySelector("#selectAB").classList.remove("red");
    document.querySelector("#selectABi").classList.remove("red");
  }
  function selectBi() {
    document.querySelector("#selectA").classList.remove("red");
    document.querySelector("#selectAi").classList.remove("red");
    document.querySelector("#selectB").classList.remove("red");
    document.querySelector("#selectBi").classList.add("red");
    document.querySelector("#selectO").classList.remove("red");
    document.querySelector("#selectOi").classList.remove("red");
    document.querySelector("#selectAB").classList.remove("red");
    document.querySelector("#selectABi").classList.remove("red");
  }
  function selectO() {
    document.querySelector("#selectA").classList.remove("red");
    document.querySelector("#selectAi").classList.remove("red");
    document.querySelector("#selectB").classList.remove("red");
    document.querySelector("#selectBi").classList.remove("red");
    document.querySelector("#selectO").classList.add("red");
    document.querySelector("#selectOi").classList.remove("red");
    document.querySelector("#selectAB").classList.remove("red");
    document.querySelector("#selectABi").classList.remove("red");
  }
  function selectOi() {
    document.querySelector("#selectA").classList.remove("red");
    document.querySelector("#selectAi").classList.remove("red");
    document.querySelector("#selectB").classList.remove("red");
    document.querySelector("#selectBi").classList.remove("red");
    document.querySelector("#selectO").classList.remove("red");
    document.querySelector("#selectOi").classList.add("red");
    document.querySelector("#selectAB").classList.remove("red");
    document.querySelector("#selectABi").classList.remove("red");
  }
  function selectAB() {
    document.querySelector("#selectA").classList.remove("red");
    document.querySelector("#selectAi").classList.remove("red");
    document.querySelector("#selectB").classList.remove("red");
    document.querySelector("#selectBi").classList.remove("red");
    document.querySelector("#selectO").classList.remove("red");
    document.querySelector("#selectOi").classList.remove("red");
    document.querySelector("#selectAB").classList.add("red");
    document.querySelector("#selectABi").classList.remove("red");
  }
  function selectABi() {
    document.querySelector("#selectA").classList.remove("red");
    document.querySelector("#selectAi").classList.remove("red");
    document.querySelector("#selectB").classList.remove("red");
    document.querySelector("#selectBi").classList.remove("red");
    document.querySelector("#selectO").classList.remove("red");
    document.querySelector("#selectOi").classList.remove("red");
    document.querySelector("#selectAB").classList.remove("red");
    document.querySelector("#selectABi").classList.add("red");
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
            <div className="select flex_box" id="selectA" onClick={selectA}>
              <input type="radio" id="A+" name="A+" value="A+" />
              A+
            </div>
            <div className="select flex_box" id="selectAi" onClick={selectAi}>
              <input type="radio" id="A-" name="A-" value="A-" />
              A-
            </div>
            <div className="select flex_box" id="selectB" onClick={selectB}>
              <input type="radio" id="B+" name="B+" value="B+" />
              B+
            </div>
            <div className="select flex_box" id="selectBi" onClick={selectBi}>
              <input type="radio" id="B-" name="B-" value="B-" />
              B-
            </div>
            <div className="select flex_box" id="selectO" onClick={selectO}>
              <input type="radio" id="O+" name="O+" value="O+" />
              O+
            </div>
            <div className="select flex_box" id="selectOi" onClick={selectOi}>
              <input type="radio" id="O-" name="O-" value="O-" />
              O-
            </div>
            <div className="select flex_box" id="selectAB" onClick={selectAB}>
              <input type="radio" id="AB+" name="AB+" value="AB+" />
              AB+
            </div>
            <div className="select flex_box" id="selectABi" onClick={selectABi}>
              <input type="radio" id="AB-" name="AB-" value="AB-" />
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
