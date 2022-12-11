import React, { useState } from "react";
import DashBoardNav from "./DashBoardNav";
import Header from "./Header";

export default function DashboardLayout({ children }) {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="dashboard">
      <DashBoardNav show={showMenu} />
      <div className="dashboard-body">
        <div>
          <Header show={showMenu} setShow={setShowMenu} />
          {children}
        </div>
      </div>
    </div>
  );
}
