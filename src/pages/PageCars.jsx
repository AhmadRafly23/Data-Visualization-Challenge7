import React, { useState } from "react";
import ContentCar from "../components/ContentCar";
import Navbar from "../components/Navbar";
import SidebarBlue from "../components/SidebarBlue";

function PageCars() {
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <>
      <div className="row gx-0">
        <SidebarBlue />
        <Navbar showSidebar={showSidebar} />
        <ContentCar sidebar={sidebar} />
      </div>
    </>
  );
}

export default PageCars;
