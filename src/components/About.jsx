import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function About({ posts }) {
  console.log(posts.posts[0]);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>About Page</h2>
      <Link to="/">Home</Link> <br />
      <Link to="/contact">Contact</Link> <br />
      <Link to="/posts">Posts</Link>
    </div>
  );
}
const mapStateToProps = (state) => ({
  posts: state.post,
});

export default connect(mapStateToProps)(About);
