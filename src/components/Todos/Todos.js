import React, { Fragment } from "react";
import Add from "../UI/Add";

import Todo from "./Todo";

const Todos = (props) => {
  const todosList = (
    <ul>
      {props.todos.map((item) => {
        return <Todo key={item.id} name={item.title} {...props} id={item.id} />;
      })}
    </ul>
  );
  return (
    <Fragment>
      {props.showData && todosList} <Add type="Todos" />
    </Fragment>
  );
};

export default Todos;
