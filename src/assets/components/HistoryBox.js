import React from "react";

function HistoryBox({ serial, name, times }) {
  return (
    <div className="flex_box history_box">
      <div className="flex_box serial">{serial}</div>
      <h4>{name}</h4>
      <div className="times">{times}&nbsp;times</div>
    </div>
  );
}

export default HistoryBox;
