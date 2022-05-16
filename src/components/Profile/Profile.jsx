import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main className={classes.mainContent}>
      <ProfileInfo />
      <MyPosts
        postsData={props.profileState.postsData}
        dispatch={props.dispatch}
        newPostText={props.profileState.newPostText}
      />
    </main>
  );
};

export default Profile;
