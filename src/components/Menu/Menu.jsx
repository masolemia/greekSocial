import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <nav className={classes.menu}>
      <NavLink to="/profile" className={(navData) => (navData.isActive ? classes.active : classes.item)}>
        Profile
      </NavLink>
      <NavLink to="/messages" className={(navData) => (navData.isActive ? classes.active : classes.item)}>
        Messages
      </NavLink>
      <NavLink to="/news" className={(navData) => (navData.isActive ? classes.active : classes.item)}>
        News
      </NavLink>
      <NavLink to="/music" className={(navData) => (navData.isActive ? classes.active : classes.item)}>
        Music
      </NavLink>
      <NavLink to="/settings" className={(navData) => (navData.isActive ? classes.active : classes.item)}>
        Settings
      </NavLink>
      <NavLink to="/users" className={(navData) => (navData.isActive ? classes.active : classes.item)}>
        Users
      </NavLink>
      {props.sidebar.users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </nav>
  );
};

export default Menu;
