import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  const handleTodoChange = (id, isComplete = null) => {
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

  const handleAdd = (task) => {
    setTodos((todos) => [
      ...todos,
      {
        id: uuid(),
        task,
        isComplete: false,
        createdAt: new Date(),
      },
    ]);
  };

  return (
    <>
      <div className="row">
        <div className="mx-auto">
          <TodoForm onSubmit={handleAdd} />
        </div>
      </div>

      <div className="row">
        <div className="mx-auto mt-2">
          <TodoList
            onItemChange={handleTodoChange}
            onItemDelete={handleDelete}
            todos={todos}
          />
        </div>
      </div>
    </>
  );
};

export default Todo;
