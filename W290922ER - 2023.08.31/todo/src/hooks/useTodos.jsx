import { v4 as uuid } from "uuid";
import { useState } from "react";

export const useTodos = (localStorageKey = null) => {
  const [todos, setTodos] = useState(() => {
    if (!localStorageKey) {
      return [];
    }

    const savedTodos = localStorage.getItem(localStorageKey);

    if (!savedTodos) {
      return [];
    }

    return JSON.parse(savedTodos, (key, value) => {
      if (key === "createdAt") {
        return new Date(value);
      }

      return value;
    });
  });

  const save = (todos) => {
    if (!localStorageKey) {
      return;
    }

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleDelete = (id) => {
    setTodos((todos) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);

      save(updatedTodos);
      return updatedTodos;
    });
  };

  const handleTodoChange = (id, isComplete = null) => {
    setTodos((todos) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete:
              typeof isComplete === "boolean" ? isComplete : !todo.isComplete,
          };
        }

        return todo;
      });

      save(updatedTodos);
      return updatedTodos;
    });
  };

  const handleAdd = (task) => {
    setTodos((todos) => {
      const updatedTodos = [
        ...todos,
        {
          id: uuid(),
          task,
          isComplete: false,
          createdAt: new Date(),
        },
      ];

      save(updatedTodos);
      return updatedTodos;
    });
  };

  return {
    todos,
    handleDelete,
    handleTodoChange,
    handleAdd,
  };
};
