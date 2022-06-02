import React from "react";

const Delete = ({ id, deleteHandler }) => {
  const handleDelete = () => {
    deleteHandler(id);
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default Delete;
