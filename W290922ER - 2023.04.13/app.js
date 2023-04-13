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

function handleIsCompleteChange(id) {
  changeTodoIsComplete(id);
  renderTodoApp();
}

function handleRemoveTodo(id) {
  removeTodo(id);
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

function renderTodoItem(todo) {
  return `
        <li class="list-group-item d-flex justify-content-between">
          <input
            class="form-check-input me-1"
            type="checkbox"
            id="todo-id-${todo.id}"
            onchange="handleIsCompleteChange(${todo.id})"
            ${todo.isComplete ? "checked" : ""}
          />
          <label
            class="form-check-label mx-1 flex-fill ${
              todo.isComplete
                ? "text-secondary text-decoration-line-through"
                : ""
            }"
            for="todo-id-${todo.id}"
          >
            ${todo.title}
          </label>
          <i 
            class="text-danger bi bi-trash" 
            onclick="handleRemoveTodo(${todo.id})">  
          </i>
        </li>`;
}

function renderTodoList(todos = []) {
  let html = '<ul class="list-group">';

  for (const todo of todos) {
    html += renderTodoItem(todo);
  }
  html += `</ul>`;

  return html;
}
