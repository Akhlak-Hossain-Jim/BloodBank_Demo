import React from "react";

function Badge(props) {
  return (
    <div className="grid_parent j_center badge">
      <div className="rounded_demo"></div>
      <span className="badge_name">{props.name}</span>
    </div>
  );
}

export default Badge;
