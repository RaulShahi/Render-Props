import { Fragment, useState } from "react";
import Users from "./Users";
import UserModal from "../UI/Modal/UserModal";

const UserFinder = (props) => {
  const [showUserModal, setShowUserModal] = useState(false);

  const toggleUserModal = () => {
    setShowUserModal((curState) => !curState);
  };
  return (
    <Fragment>
      <Users
        users={props.data}
        showData={props.showData}
        {...props}
        onToggle={toggleUserModal}
      />
      {showUserModal && (
        <UserModal
          handleModal={toggleUserModal}
          addHandler={props.addHandler}
        />
      )}
    </Fragment>
  );
};

export default UserFinder;
