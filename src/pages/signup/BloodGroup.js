import React from "react";

export default function BloodGroup({ Group, setGroup, cta }) {
  const GROUPS = [`A+`, `A-`, `B+`, `B-`, `O+`, `O-`, `AB+`, `AB-`];
  return (
    <div className="form">
      <h1>What is Your Blood Group</h1>
      <div className="radios grid_parent grid_threeCol">
        {React.Children.toArray(
          GROUPS.map((group) => (
            <div
              className={`select flex_box ${group === Group ? "selected" : ""}`}
              onClick={() => setGroup(group)}
            >
              {group}
            </div>
          ))
        )}
      </div>
      <button
        className="c_width"
        onClick={() => cta(3)}
        disabled={!Group ? true : false}
      >
        Next
      </button>
    </div>
  );
}
