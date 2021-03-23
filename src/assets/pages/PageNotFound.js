import React from "react";
import { useLocation } from "react-router-dom";

function PageNotFound() {
  let location = useLocation();

  return (
    <div className="pageNotFound">
      404 Error. Your requested page&nbsp;{location.pathname}&nbsp;not found.
    </div>
  );
}

export default PageNotFound;
