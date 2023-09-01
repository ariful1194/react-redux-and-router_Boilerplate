import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Contact Page</h2>
      <Link to="/">Home</Link> <br />
      <Link to="/about">About</Link> <br />
      <Link to="/posts">Posts</Link>
    </div>
  );
}

export default Contact;
