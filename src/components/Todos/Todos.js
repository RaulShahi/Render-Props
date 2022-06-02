import React, { Fragment } from "react";
import Add from "../UI/Add";

import Todo from "./Todo";

const Todos = (props) => {
  let todosList;
  if (props.todos.length === 0) {
    todosList = <p>No such todos.</p>;
  } else {
    todosList = (
      <ul>
        {props.todos.map((item) => {
          return (
            <Todo key={item.id} name={item.title} {...props} id={item.id} />
          );
        })}
      </ul>
    );
  }
  return (
    <Fragment>
      {props.showData && todosList}{" "}
      <Add type="Todos" onClick={props.onToggle} />
    </Fragment>
  );
};

export default Todos;
