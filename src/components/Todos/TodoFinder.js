import Todos from "./Todos";
import { Fragment } from "react";

const TodoFinder = (props) => {
  return (
    <Fragment>
      <Todos todos={props.data} showData={props.showData} {...props} />
    </Fragment>
  );
};

export default TodoFinder;
