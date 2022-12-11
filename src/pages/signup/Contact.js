import React from "react";

export default function Contact({
  PhoneNo,
  AlterNativePhoneNo,
  setPhoneNo,
  setAlterNativePhoneNo,
  Social,
  setSocial,
  cta,
}) {
  const handleCTA = (e) => {
    e.preventDefault();
    cta(2);
  };
  return (
    <div className="form">
      <h1>Contact Information</h1>
      <label for="username">
        Phone No <br />
        <input
          type="tel"
          id="PhoneNo"
          name="PhoneNo"
          placeholder="018xxxxxxxx"
          value={PhoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          required
        />
      </label>
      <label for="altPhoneNo">
        Alternative Phone No <br />
        <input
          type="tel"
          id="altPhoneNo"
          name="altPhoneNo"
          placeholder="017xxxxxxxx"
          value={AlterNativePhoneNo}
          onChange={(e) => setAlterNativePhoneNo(e.target.value)}
          required
        />
      </label>
      <label for="Social">
        Social (Optional) <br />
        <input
          type="url"
          id="socialLink"
          name="Social"
          placeholder="https://www.example.com"
          value={Social}
          onChange={(e) => setSocial(e.target.value)}
        />
      </label>
      <button
        className="c_width"
        onClick={(e) => handleCTA(e)}
        disabled={!PhoneNo || !AlterNativePhoneNo ? true : false}
      >
        Next
      </button>
    </div>
  );
}
