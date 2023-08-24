import TodoItem from "./todoItem";

const TodoList = ({
  onItemChange = () => {},
  onItemDelete = () => {},
  todos = [],
}) => {
  if (!todos.length) {
    return (
      <div className="bg-secondary shadow-sm rounded-3 text-center text-white p-3">
        <h3 className="display-3 fw-bold">Good Job!!</h3>

        <p>
          You have nothing on your todo list!
          <br />
          Go to the beach! ⛱️
        </p>
      </div>
    );
  }

  return (
    <>
      <div>0 / 5</div>
      <div className="list-group">
        {[...todos]
          .sort((a) => (a.isComplete ? 1 : -1))
          .map((todo) => (
            <TodoItem
              onCompleteChange={onItemChange}
              onDelete={onItemDelete}
              key={todo.id}
              todo={todo}
            />
          ))}
      </div>
    </>
  );
};

export default TodoList;
