import React, { useState } from "react";
import ContentAdmin from "./ContentAdmin";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
  }
  console.log(sidebar);
  return (
    <>
      <div
        className="col w-100"
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
      <ContentAdmin />
    </>
  );
}

export default Navbar;
