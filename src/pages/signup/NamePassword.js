import React, { useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

export default function NamePassword({
  UserName,
  setUserName,
  Email,
  setEmail,
  Password,
  setPassword,
  cta,
}) {
  const [ShowPassword, setShowPassword] = useState(false);
  const handleCTA = (e) => {
    e.preventDefault();
    cta(1);
  };
  return (
    <div className="form">
      <h1>Let Us Know About You</h1>
      <label for="username">
        Username <br />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Jhon Doe"
          value={UserName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </label>
      <label for="email">
        Email <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="jhondoe@gmail.com"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label for="password">
        Password <br />
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
        className="c_width"
        onClick={(e) => handleCTA(e)}
        disabled={!Password || !Email || !UserName ? true : false}
      >
        Next
      </button>
    </div>
  );
}
