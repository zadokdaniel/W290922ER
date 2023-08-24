import { useState } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "buy milk 1",
      isComplete: false,
      createdAt: new Date(),
    },
    {
      id: 2,
      task: "buy milk 2",
      isComplete: true,
      createdAt: new Date(),
    },
    {
      id: 3,
      task: "buy milk 3",
      isComplete: false,
      createdAt: new Date(),
    },
  ]);

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

  return (
    <>
      <div className="row">
        <div className="mx-auto">
          <TodoForm />
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

interface Product {
  id: number
  title: string;
  description: string;
  price: number;
  discount: number;
  image: { url: string, alt: string };
  available: number 
  quantity: number = 0
}
