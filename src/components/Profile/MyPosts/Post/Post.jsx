import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <React.Fragment>
      <div className={classes.avatar}></div>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.message}>{props.message}</p>
      <div>{props.likes} likes</div>
    </React.Fragment>
  );
};

export default Post;
