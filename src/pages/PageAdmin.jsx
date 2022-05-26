import React from "react";
import Navbar from "../components/Navbar";
import SidebarBlue from "../components/SidebarBlue";

function PageAdmin() {
  return (
    <>
      <div className="row gx-0">
        <SidebarBlue />
        <Navbar />
      </div>
    </>
  );
}

export default PageAdmin;
