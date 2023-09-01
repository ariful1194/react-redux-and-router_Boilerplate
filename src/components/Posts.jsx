import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addNewPost, getAllPost } from "../redux/actions/postActions";

function Posts({ getAll, addNewPost, posts }) {
  const [newPostTitle, setNewPostTitle] = useState("");

  new useEffect(() => {
    getAll();
  }, []);

  const postHandler = () => {
    if (newPostTitle) {
      addNewPost({ title: newPostTitle });
    }
  };
  return (
    <div>
      <Link to="/">Home</Link> <br />
      <Link to="/about">About</Link> <br />
      <Link to="/posts">Posts</Link>
      <h3 style={{ textAlign: "center" }}> All Posts</h3>
      <div>
        <input
          type="text"
          placeholder="title"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <br />
        <button onClick={postHandler}>Add Post</button>
      </div>
      <ul>
        {posts.length > 0 &&
          posts.map((post, index) => <li key={index}>{post.title}</li>)}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => {
      getAllPost(dispatch);
    },
    addNewPost: (newPost) => {
      addNewPost(dispatch, newPost);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
