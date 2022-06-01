import React, { Fragment } from "react";
import User from "./User";
import Add from "../UI/Add";

const Users = (props) => {
  const usersList = (
    <ul>
      {props.users.map((item) => {
        return <User key={item.id} name={item.name} id={item.id} {...props} />;
      })}
    </ul>
  );
  return (
    <Fragment>
      {props.showData && usersList} <Add type="Users" />
    </Fragment>
  );
};

export default Users;
