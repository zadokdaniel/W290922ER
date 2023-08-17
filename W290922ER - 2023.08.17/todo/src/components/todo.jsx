import TodoForm from "./todoForm";
import TodoList from "./todoList";

const Todo = () => {
  return (
    <>
      <div className="row">
        <div className="mx-auto">
          <TodoForm />
        </div>
      </div>

      <div className="row">
        <div className="mx-auto mt-2">
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default Todo;
