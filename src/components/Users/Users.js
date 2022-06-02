import React, { Fragment } from "react";
import User from "./User";
import Add from "../UI/Add";

const Users = (props) => {
  let usersList;
  if (props.users.length === 0) {
    usersList = <p>No such users.</p>;
  } else {
    usersList = (
      <ul>
        {props.users.map((item) => {
          return (
            <User key={item.id} name={item.name} id={item.id} {...props} />
          );
        })}
      </ul>
    );
  }
  return (
    <Fragment>
      {props.showData && usersList}{" "}
      <Add type="Users" onClick={props.onToggle} />
    </Fragment>
  );
};

export default Users;
