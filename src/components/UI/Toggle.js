import React, { Fragment, useState } from "react";

const ToggleWrapper = ({ entity, show, handleToggle }) => {
  const toggleHandler = () => {
    handleToggle();
  };

  return (
    <Fragment>
      <h2>{`${entity}`.charAt(0).toUpperCase() + `${entity}`.slice(1)}</h2>
      <button onClick={toggleHandler}>
        {show ? "Hide " : "Show "}
        {entity}
      </button>
    </Fragment>
  );
};
export default ToggleWrapper;
