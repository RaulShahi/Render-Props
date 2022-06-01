import { Fragment } from "react";
import Users from "./Users";

const UserFinder = (props) => {
  return (
    <Fragment>
      <Users users={props.data} showData={props.showData} {...props} />
    </Fragment>
  );
};

export default UserFinder;
