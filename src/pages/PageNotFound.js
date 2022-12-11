import React from "react";
import { useLocation } from "react-router-dom";

function PageNotFound() {
  let location = useLocation();

  return (
    <main className="pageNotFound">
      <div>
        404 Error. Your requested page&nbsp;{location.pathname}&nbsp;not found.
      </div>
    </main>
  );
}

export default PageNotFound;
