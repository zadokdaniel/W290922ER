let currentId = 1;

const todos = [
  // {
  //     title: 'buy milk',
  //     isComplete: false,
  //     createdAt: new Date()
  // }
];

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

  return removed ? removed : null;
}

function removeAllTodos() {
  todos.splice(0, todos.length);

  return getTodos();
}

function changeTodoIsComplete(id) {
  const index = findTodoIndex(id);

  if (typeof index !== "number") {
    return null;
  }

  todos[index].isComplete = !todos[index].isComplete;
  return todos[index];
}
