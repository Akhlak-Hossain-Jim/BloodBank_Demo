import React from "react";

export default function SignupContainer({ text, children }) {
  return (
    <div className="signUp grid_parent grid_twoCol">
      <section className="signUp_left">
        <img src={`/image/logo512.png`} alt="Dummy blood bank logo" />
        <br />
        <h1>{text}</h1>
      </section>
      <section className="signUp_right">{children}</section>
    </div>
  );
}
