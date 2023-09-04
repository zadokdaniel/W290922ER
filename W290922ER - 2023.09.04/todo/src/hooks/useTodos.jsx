import { v4 as uuid } from "uuid";
import { useLocalStorage } from "./useLocalStorage";

export const useTodos = (localStorageKey = null) => {
  const [todos, setTodos] = useLocalStorage([], localStorageKey, {
    reviver: (key, value) => (key === "createdAt" ? new Date(value) : value),
  });

  const handleDelete = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

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

  return [
    todos,
    {
      handleDelete,
      handleTodoChange,
      handleAdd,
    },
  ];
};
