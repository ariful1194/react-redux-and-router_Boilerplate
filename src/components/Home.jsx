import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Home Page</h3>

      <div>
        <h2>Layout one Links</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>Layout Two Links</h2>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/single/123">Single Page with Param</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
