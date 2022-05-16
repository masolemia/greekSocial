import React from "react";
import classes from "./ProfileInfo.module.css";
import landscape from "../../../pictures/mainTheme.png";

const ProfileInfo = () => {
  return (
    <section>
      <img src={landscape} alt="background" className={classes.landscape} />
      <h2>Personal info:</h2>
      <div className={classes.personalInfo}>
        <img
          src="https://i.pinimg.com/originals/a5/b7/16/a5b7168f953f251fa34f7170a6fd9e09.jpg"
          alt="avatar"
          className={classes.avatar}
        />
        <div>
          <p>Maria</p>
          <p>Age: 27</p>
          <p>city: Moscow</p>
          <p>Education: MSMU</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
