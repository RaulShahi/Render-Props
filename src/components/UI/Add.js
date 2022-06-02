import React from "react";

const Add = ({ type, onClick }) => {
  return <button onClick={() => onClick()}>Add {type}</button>;
};
export default Add;
