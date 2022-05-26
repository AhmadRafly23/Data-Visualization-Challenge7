import React from "react";
import "../stylesheets/Sidebar.css";

function SidebarBlue() {
  return (
    <>
      <div
        className="col-1 bg-danger vh-100"
        style={{ position: "fixed", zIndex: "2", left: 0 }}
      >
        <p className="cek">hallo</p>
      </div>
    </>
  );
}

export default SidebarBlue;
