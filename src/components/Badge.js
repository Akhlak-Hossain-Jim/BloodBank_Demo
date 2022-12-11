import React from "react";

function Badge({ name, icon }) {
  return (
    <div className="grid_parent j_center badge">
      <div className="rounded_demo">{icon && icon}</div>
      <span className="badge_name">{name}</span>
    </div>
  );
}

export default Badge;
