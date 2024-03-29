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

// RENDER

const todoInput = document.getElementById("todo-input");
const todoAddBtn = document.getElementById("todo-add-btn");
const todoList = document.getElementById("todo-list");

renderTodoApp();

todoAddBtn.addEventListener("click", handleAddTodo);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleAddTodo();
  }
});

function handleAddTodo() {
  addTodo(todoInput.value);
  todoInput.value = "";

  renderTodoApp();
}

function handleIsCompleteChange(index) {
  changeTodoIsComplete(index);
  renderTodoApp();
}

function renderTodoApp() {
  const todos = getTodos();
  todoList.innerHTML =
    todos.length > 0 ? renderTodoList(todos) : renderEmptyListNotification();
}

function renderEmptyListNotification() {
  return `
          <div class="bg-light rounded text-center p-3">
            <h1 class="display-3 fw-bold">Well Done!!</h1>
            <p>You are all done for today, go titfanen on the beach!</p>
          </div>
  `;
}
function renderTodoItem(todo, index) {
  return `
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            id="todo-id-${index}"
            onchange="handleIsCompleteChange(${index})"
            ${todo.isComplete ? "checked" : ""}
          />
          <label
            class="form-check-label stretched-link ${
              todo.isComplete
                ? "text-secondary text-decoration-line-through"
                : ""
            }"
            for="todo-id-${index}"
          >
            ${todo.title}
          </label>
        </li>`;
}
function renderTodoList(todos = []) {
  let html = '<ul class="list-group">';
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    html += renderTodoItem(todo, i);
  }
  html += `</ul>`;

  return html;
}
