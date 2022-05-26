import React from "react";

function ContentAdmin({ sidebar }) {
  return (
    <>
      <div
        className="px-0"
        style={{
          marginTop: "70px",
          marginLeft: "70px",
          //   position: "fixed",
          //   top: "70px",
          //   left: "70px",
          //   bottom: "0",
          //   right: "0",
        }}
      >
        <div className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div className="dive" style={{ display: "flex" }}>
            <div
              className="div1"
              style={{
                backgroundColor: "red",
                width: "220px",
                height: "100vh",
              }}
            >
              Ahmad Rafly Pradana
            </div>
            <div className="div2" style={{ backgroundColor: "purple" }}>
              <p style={{ color: "black", fontSize: "200px" }}>
                adadddddddddddddddddddddd
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentAdmin;
