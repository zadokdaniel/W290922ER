const TODO_CURRENT_ID_LS_KEY = "todo-current-id";
const TODOS_LS_KEY = "todos";

const savedCurrentId = localStorage.getItem(TODO_CURRENT_ID_LS_KEY);
let currentId = savedCurrentId ? Number(savedCurrentId) : 1;

const savedTodos = localStorage.getItem(TODOS_LS_KEY);
let todos = savedTodos
  ? JSON.parse(savedTodos, (key, value) => {
      if (key === "createdAt") {
        return new Date(value);
      }

      return value;
    })
  : [
      // {
      //     title: 'buy milk',
      //     isComplete: false,
      //     createdAt: new Date()
      // }
    ];

function save() {
  localStorage.setItem(TODOS_LS_KEY, JSON.stringify(todos));
  localStorage.setItem(TODO_CURRENT_ID_LS_KEY, currentId);
}

export function getTodos() {
  return todos;
}

export function addTodo(title) {
  const newTodo = {
    id: currentId++,
    title,
    // title: title,
    isComplete: false,
    createdAt: new Date(),
  };

  todos = [...todos, newTodo];

  save();
  return newTodo;
}

export function getTodoById(id) {
  const todo = todos.find((todo) => todo.id === id);
  return todo ? todo : null;
}

export function removeTodo(id) {
  const removed = getTodoById(id);
  todos = todos.filter((todo) => todo.id !== id);

  save();
  return removed;
}

export function removeAllTodos() {
  todos = [];

  save();
  return getTodos();
}

export function changeTodoIsComplete(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isComplete: !todo.isComplete };
    }

    return todo;
  });

  save();
  return getTodoById(id);
}
