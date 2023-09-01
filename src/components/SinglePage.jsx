import React from "react";
import { Link, useParams } from "react-router-dom";
function SinglePage() {
  let { id } = useParams();
  return (
    <div>
      <div>SinglePage - ID: {id} </div>
      <div>
        <br />
        <Link to="/">Home</Link> <br />
        <Link to="/contact">Contact</Link> <br />
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default SinglePage;
