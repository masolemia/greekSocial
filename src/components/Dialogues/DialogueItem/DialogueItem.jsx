import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./DialogueItem.module.css";

const DialogueItem = (props) => {
  return (
    <NavLink className={classes.item} to={"/messages/" + props.id}>
      {props.name}
    </NavLink>
  );
};

export default DialogueItem;
