import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
  let sender = props.sender === "me" ? "me" : "someone";
  return <p className={`${classes.message} ${sender}`}>{props.message}</p>;
};

export default Message;
