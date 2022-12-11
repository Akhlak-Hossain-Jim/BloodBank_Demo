import React from "react";
import { Link } from "react-router-dom";

// logo521.png

function Welcome() {
  return (
    <main className="welcome">
      <img src={`/image/logo512.png`} alt="blood bank logo" />
      <Link className="red_w" to="/signIn/">
        Start Journey
      </Link>
    </main>
  );
}

export default Welcome;
