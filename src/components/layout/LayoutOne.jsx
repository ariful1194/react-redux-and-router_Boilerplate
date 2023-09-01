import React from "react";
import { Outlet } from "react-router-dom";
function LayoutOne() {
  return (
    <div>
      <h2
        style={{
          backgroundColor: "yellow",
          textAlign: "center",
          padding: "1rem 0 ",
        }}
      >
        Layout One
      </h2>
      <Outlet />
      <h2
        style={{
          backgroundColor: "yellow",
          textAlign: "center",
          padding: "1rem 0 ",
        }}
      >
        Layout One footer
      </h2>
    </div>
  );
}

export default LayoutOne;
