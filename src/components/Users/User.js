import React from "react";
import classes from "./User.module.css";
import Delete from "../UI/Delete";

const User = (props) => {
  return (
    <li className={classes.user}>
      {props.name} <Delete deleteHandler={props.deleteHandler} id={props.id} />
    </li>
  );
};

export default User;
