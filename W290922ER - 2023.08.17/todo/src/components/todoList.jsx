import TodoItem from "./todoItem";

const TodoList = () => {
  return (
    <>
      <div className="bg-secondary shadow-sm rounded-3 text-center text-white p-3">
        <h3 className="display-3 fw-bold">Good Job!!</h3>

        <p>
          You have nothing on your todo list!
          <br />
          Go to the beach! ⛱️
        </p>
      </div>

      <div className="list-group">
        <TodoItem />
      </div>
    </>
  );
};

export default TodoList;
