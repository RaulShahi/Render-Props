import { Fragment, useState } from "react";
import Todos from "./Todos";
import TodoModal from "../UI/Modal/TodoModal";

const TodoFinder = (props) => {
  const [showTodoModal, setShowTodoModal] = useState(false);
  const toggleTodoModal = () => {
    setShowTodoModal((curState) => !curState);
  };
  return (
    <Fragment>
      <Todos
        todos={props.data}
        showData={props.showData}
        onToggle={toggleTodoModal}
        {...props}
      />
      {showTodoModal && (
        <TodoModal
          handleModal={toggleTodoModal}
          addHandler={props.addHandler}
        />
      )}
    </Fragment>
  );
};

export default TodoFinder;
