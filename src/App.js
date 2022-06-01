import WrapperComponent from "./components/WrapperComponent";
import UserFinder from "./components/Users/UserFinder";
import TodoFinder from "./components/Todos/TodoFinder";

function App() {
  return (
    <div style={divStyle}>
      <WrapperComponent
        render={(data, showData, deleteHandler) => (
          <UserFinder
            data={data}
            showData={showData}
            deleteHandler={deleteHandler}
          />
        )}
        entity="users"
      />
      <WrapperComponent
        render={(data, showData, deleteHandler) => (
          <TodoFinder
            data={data}
            showData={showData}
            deleteHandler={deleteHandler}
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
