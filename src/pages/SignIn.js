import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

export default function SignIn() {
  const [UserName, setUserName] = useState();
  const [Password, setPassword] = useState();
  const [ShowPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open("/Dashboard/", "_self");
  };
  return (
    <main className="signIn grid_parent grid_twoCol">
      <img src={`/image/logo512.png`} alt="" />
      <section>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <h1>Sign In</h1>
          <label for="emailOrName">
            Email or Username
            <br />
            <input
              type="text"
              id="emailOrName"
              name="emailOrName"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="jhondoe@gmail.com"
            />
          </label>
          <label for="password">
            Password
            <br />
            <div className="password">
              <input
                type={!ShowPassword ? "password" : "text"}
                id="password"
                name="password"
                placeholder="*****"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="visibility_icon"
                style={{ color: "red" }}
                role="button"
                onClick={() => setShowPassword(!ShowPassword)}
              >
                {!ShowPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </div>
            </div>
          </label>
          <button
            value="submit"
            className="c_width"
            disabled={!UserName || !Password ? true : false}
          >
            Login
          </button>
        </form>
        <a className="center lite" href="/" onClick={(e) => e.preventDefault()}>
          Forgot Passward?
        </a>
        <p>
          Don't have an account?&nbsp;
          <Link className="dark" style={{ color: "#ADADAD" }} to="/signup/">
            Sign Up
          </Link>
        </p>
      </section>
    </main>
  );
}
