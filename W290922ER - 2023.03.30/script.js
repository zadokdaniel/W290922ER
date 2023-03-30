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
  todos.push({
    title,
    // title: title,
    isComplete: false,
    createdAt: new Date(),
  });
}

function removeTodo(index) {
  todos.splice(index, 1);
}

function removeAllTodos() {
  todos.splice(0, todos.length);
}

function changeTodoIsComplete(index) {
  todos[index].isComplete = !todos[index].isComplete;
}
