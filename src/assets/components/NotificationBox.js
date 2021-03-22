import React from "react";

function NotificationBox({ group, name }) {
  return (
    <div className="notificationBox">
      <div className="bloodGroup">
        <h4>{group}</h4>
      </div>
      <div className="notificationDetaile">
        <p>
          <span className="name">{name}</span> Posted a blood request near you.
        </p>
      </div>
      <div className="timeAgo">
        <br />
        <span>1</span>&nbsp;<span>min</span>&nbsp;ago
      </div>
    </div>
  );
}

export default NotificationBox;
