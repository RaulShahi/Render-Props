import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import UserForm from "../../Forms/UserForm";

const UserModal = ({ handleModal, addHandler }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={handleModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <UserForm onSubmit={handleModal} addHandler={addHandler} />,
        document.getElementById("userForm-root")
      )}
    </>
  );
};

export default UserModal;
