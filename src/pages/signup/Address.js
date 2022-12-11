import React from "react";

export default function Address({
  StreetAddress,
  setStreetAddress,
  City,
  setCity,
  ZipCode,
  setZipCode,
  cta,
}) {
  return (
    <div className="form">
      <h1>Where Do You Live?</h1>
      <label for="streetAddress">
        Street Address <br />
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          placeholder="123/4, Saint Road"
          value={StreetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
      </label>
      <label for="city">
        City <br />
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Gotham"
          value={City}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label for="postcode">
        Postcode <br />
        <input
          type="number"
          id="postcode"
          name="postcode"
          placeholder="1234"
          value={ZipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </label>
      <button
        className="c_width"
        onClick={() => cta(6)}
        disabled={!StreetAddress || !City || !ZipCode ? true : false}
      >
        Next
      </button>
    </div>
  );
}
