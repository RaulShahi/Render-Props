import React from "react";

const Delete = ({ type, id, deleteHandler }) => {
  const handleDelete = () => {
    deleteHandler(id);
  };

  return <button onClick={handleDelete}>Delete {type}</button>;
};

export default Delete;
