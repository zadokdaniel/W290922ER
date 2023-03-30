// data
const todos = [
  // {
  //     title: 'buy milk',
  //     isComplete: false,
  //     createdAt: new Date()
  // }
];

// data operations
function getTodos() {
  return todos;
}

function addTodo(title) {
  const newTodo = {
    title,
    // title: title,
    isComplete: false,
    createdAt: new Date(),
  };

  todos.push(newTodo);

  return newTodo;
}

function removeTodo(index) {
  const removed = todos.splice(index, 1)[0];

  return removed ? removed : null;
}

function removeAllTodos() {
  todos.splice(0, todos.length);

  return getTodos();
}

function changeTodoIsComplete(index) {
  if (index < 0 || index > todos.length - 1) {
    return null;
  }

  todos[index].isComplete = !todos[index].isComplete;
  return todos[index];
}
