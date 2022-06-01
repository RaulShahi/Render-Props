import React from "react";
import classes from "./Todo.module.css";
import Delete from "../UI/Delete";

const Todo = (props) => {
  return (
    <li className={classes.todo}>
      {props.name}{" "}
      <Delete
        deleteHandler={props.deleteHandler}
        name={props.name}
        id={props.id}
      />
    </li>
  );
};

export default Todo;
