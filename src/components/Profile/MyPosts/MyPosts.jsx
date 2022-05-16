import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
  let newPost = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onChangePost = () => {
    let text = newPost.current.value;
    props.dispatch(updatePostActionCreator(text));
  };

  return (
    <React.Fragment>
      <h2 className={classes.posts}>My Posts</h2>
      <textarea ref={newPost} value={props.newPostText} onChange={onChangePost}></textarea>
      <button onClick={addPost}>Add post</button>
      {props.postsData.map((post) => (
        <Post message={post.message} id={post.id} likes={post.likes} author={post.author} key={post.id} />
      ))}
    </React.Fragment>
  );
};

export default MyPosts;
