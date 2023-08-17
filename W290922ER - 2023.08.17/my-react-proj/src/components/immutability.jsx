import { useState } from "react";
import { v4 as uuid } from "uuid";

const Immutability = () => {
  const [todos, setTodos] = useState([]);
  const [inputs, setInputs] = useState({
    title: "buy milk",
    isComplete: false,
  });

  const addTodo = (title, isComplete = false) => {
    setTodos((todos) => [
      ...todos,
      { id: uuid(), title, isComplete, createdAt: new Date() },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const changeIsComplete = (id, isComplete = null) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete:
              typeof isComplete === "boolean" ? isComplete : !todo.isComplete,
          };
        }

        return todo;
      })
    );
  };

  if (!todos.length) {
    return <div>nothing todo</div>;
  }

  return (
    <div>
      <input
        onChange={(e) =>
          setInputs((inputs) => ({ ...inputs, title: e.target.value }))
        }
        value={inputs.title}
        type="text"
      />
      <input
        onChange={(e) =>
          setInputs((inputs) => ({ ...inputs, isComplete: e.target.checked }))
        }
        checked={inputs.isComplete}
        type="checkbox"
      />

      <button onClick={() => addTodo(inputs.title, inputs.isComplete)}>
        add
      </button>

      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.createdAt.toLocaleTimeString()} -{" "}
            <span
              className="btn btn-primary"
              onClick={() => changeIsComplete(todo.id)}
            >
              {todo.isComplete ? "V" : "X"}
            </span>
            {todo.title}
            <button onClick={() => removeTodo(todo.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Immutability;
