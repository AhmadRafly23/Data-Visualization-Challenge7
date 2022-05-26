import React, { useState } from "react";
import ContentAdmin from "./ContentAdmin";
import { GiHamburgerMenu } from "react-icons/gi";
import "../stylesheets/Navbar.css";
function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
  }
  console.log(sidebar);
  return (
    <>
      <div className="row">
        <div
          className="col-12"
          style={{
            height: "70px",
            backgroundColor: "blue",
            position: "fixed",
            zIndex: "1",
            top: "0",
          }}
        >
          <p>navbar</p>
          <GiHamburgerMenu onClick={showSidebar} />
        </div>
      </div>
      <div className="row">
        <ContentAdmin sidebar={sidebar} />
      </div>
    </>
  );
}

export default Navbar;
