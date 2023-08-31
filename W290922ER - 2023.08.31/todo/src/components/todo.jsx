import React, { useState } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import { useTodos } from "../hooks/useTodos";

const Todo = () => {
  const { todos, handleDelete, handleTodoChange, handleAdd } =
    useTodos("todos");

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
