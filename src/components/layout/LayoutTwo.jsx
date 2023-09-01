import React from "react";
import { Outlet } from "react-router-dom";
function LayoutTwo() {
  return (
    <div>
      <h2
        style={{
          backgroundColor: "blue",
          textAlign: "center",
          padding: "1rem 0 ",
          color: "white",
        }}
      >
        Layout Two
      </h2>
      <Outlet />
      <h2
        style={{
          backgroundColor: "blue",
          textAlign: "center",
          padding: "1rem 0 ",
          color: "white",
        }}
      >
        Layout Two Footer
      </h2>
    </div>
  );
}

export default LayoutTwo;
