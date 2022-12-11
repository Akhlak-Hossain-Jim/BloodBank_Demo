import React from "react";

export default function BirthDay({
  YearOld,
  setYearOld,
  OldDay,
  setOldDay,
  Month,
  setMonth,
  cta,
}) {
  return (
    <div className="form page-7">
      <h1>How Old Are You?</h1>
      <label for="years">
        <p className="t_center">I am</p>

        <input
          type="number"
          id="years"
          name="years"
          placeholder="18"
          value={YearOld}
          onChange={(e) => setYearOld(e.target.value)}
        />

        <p className="t_center">Years Old</p>
      </label>
      <label for="date">
        <input
          type="number"
          id="date"
          name="date"
          placeholder="15"
          value={OldDay}
          onChange={(e) => setOldDay(e.target.value)}
        />

        <p className="t_center">Date</p>
      </label>
      <label for="month">
        <input
          type="month"
          id="month"
          name="month"
          placeholder="January"
          value={Month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <br />
        <p className="t_center">Month</p>
      </label>
      <button
        className="c_width"
        onClick={() => cta(7)}
        disabled={!YearOld || !OldDay || !Month ? true : false}
      >
        Next
      </button>
    </div>
  );
}
