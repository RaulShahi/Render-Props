import WrapperComponent from "./components/WrapperComponent";
import UserFinder from "./components/Users/UserFinder";
import TodoFinder from "./components/Todos/TodoFinder";

function App() {
  return (
    <div style={divStyle}>
      <WrapperComponent
        render={(data, showData, deleteHandler, addHandler) => (
          <UserFinder
            data={data}
            showData={showData}
            deleteHandler={deleteHandler}
            addHandler={addHandler}
          />
        )}
        entity="users"
      />
      <WrapperComponent
        render={(data, showData, deleteHandler,addHandler) => (
          <TodoFinder
            data={data}
            showData={showData}
            deleteHandler={deleteHandler}
            addHandler={addHandler}
          />
        )}
        entity="todos"
      />
    </div>
  );
}

const divStyle = {
  display: "flex",
  justifyContent: "space-around",
};

export default App;
