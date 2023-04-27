const TODO_CURRENT_ID_LS_KEY = "todo-current-id";
const TODOS_LS_KEY = "todos";

const savedCurrentId = localStorage.getItem(TODO_CURRENT_ID_LS_KEY);
let currentId = savedCurrentId ? Number(savedCurrentId) : 1;

const savedTodos = localStorage.getItem(TODOS_LS_KEY);
const todos = savedTodos
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

function getTodos() {
  return todos;
}

function addTodo(title) {
  const newTodo = {
    id: currentId++,
    title,
    // title: title,
    isComplete: false,
    createdAt: new Date(),
  };

  todos.push(newTodo);

  save();
  return newTodo;
}

function findTodoIndex(id) {
  const index = todos.findIndex((todo) => todo.id === id);

  return index === -1 ? null : index;
}

function removeTodo(id) {
  const index = findTodoIndex(id);

  if (typeof index !== "number") {
    return null;
  }

  const removed = todos.splice(index, 1)[0];

  save();
  return removed ? removed : null;
}

function removeAllTodos() {
  todos.splice(0, todos.length);

  save();
  return getTodos();
}

function changeTodoIsComplete(id) {
  const index = findTodoIndex(id);

  if (typeof index !== "number") {
    return null;
  }

  todos[index].isComplete = !todos[index].isComplete;

  save();

  return todos[index];
}
