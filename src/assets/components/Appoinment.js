import React from "react";

function Appoinment({ month, day, hospitalName, quantity, dayLeft }) {
  return (
    <div className="appoinment">
      <div className="date">
        <div className="month">{month}</div>
        <h1>{day}</h1>
      </div>
      <div className="hospital_name">
        <h6>{hospitalName}</h6>
        <div className="quantity">
          <span>{quantity}</span>Bag Blood
        </div>
      </div>
      <div className="day_left">
        <span>{dayLeft}</span> days ago
      </div>
    </div>
  );
}

export default Appoinment;
