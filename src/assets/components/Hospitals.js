import React from "react";

// Imported Icons

import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Hospitals({ name, address, time }) {
  return (
    <div className="hospital_dBox">
      <div className="top_icoBox">
        <div></div>
        <MoreVertIcon className="vertico" />
      </div>
      <div className="details_container">
        <div className="sign">H</div>
        <div className="h_address">
          <h3>{name}</h3>
          <h6>
            <LocationOnIcon className="icons" />
            &nbsp;<span>{address}</span>
          </h6>
          <h6>
            <InsertInvitationIcon className="icons" />
            &nbsp;<span>{time}</span>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Hospitals;
