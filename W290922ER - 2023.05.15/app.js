import { addTodo, changeTodoIsComplete, getTodos, removeTodo } from "./todo.js";

const todoInput = document.getElementById("todo-input");
const todoAddBtn = document.getElementById("todo-add-btn");
const todoList = document.getElementById("todo-list");
const todoInvalidFeedback = document.querySelector(
  ".todo-form .invalid-feedback"
);

renderTodoApp();

todoAddBtn.addEventListener("click", handleAddTodo);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleAddTodo();
  }
});

todoList.addEventListener("change", (e) => {
  const todoId = getTodoIdByElement(e.target);

  if (todoId && e.target.matches("input.is-complete")) {
    handleIsCompleteChange(todoId);
  }
});

todoList.addEventListener("click", (e) => {
  const todoId = getTodoIdByElement(e.target);

  if (todoId && e.target.matches(".todo-remove-btn")) {
    handleRemoveTodo(todoId);
  }
});

function getTodoIdByElement(element) {
  const todoItemElement = element.closest("li.todo-item");
  return todoItemElement ? Number(todoItemElement.dataset.todoId) : null;
}

function handleAddTodo() {
  renderError();

  try {
    addTodo(todoInput.value);
    todoInput.value = "";

    renderTodoApp();
  } catch (err) {
    renderError(err.message);
  }
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
    todos.length > 0 ? renderTodoList(...todos) : renderEmptyListNotification();
}

function renderError(err) {
  if (!err) {
    todoInput.classList.remove("is-invalid");
    todoInvalidFeedback.innerHTML = "";
    return;
  }

  todoInput.classList.add("is-invalid");
  todoInvalidFeedback.innerHTML = err;
}

function renderEmptyListNotification() {
  return `
          <div class="bg-light rounded text-center p-3">
            <h1 class="display-3 fw-bold">Well Done!!</h1>
            <p>You are all done for today, go titfanen on the beach!</p>
          </div>
  `;
}

function renderTodoItem({ id, title, isComplete }) {
  return `
        <li
          data-todo-id="${id}" 
          class="todo-item list-group-item d-flex justify-content-between"
        >
          <input
            class="is-complete form-check-input me-1"
            type="checkbox"
            id="todo-id-${id}"
            ${isComplete ? "checked" : ""}
          />

          <label
            class="form-check-label mx-1 flex-fill ${
              isComplete ? "text-secondary text-decoration-line-through" : ""
            }"
            for="todo-id-${id}"
          >
            ${title}
          </label>
          <i 
            class="todo-remove-btn text-danger bi bi-trash" 
          >
          </i>
        </li>`;
}

function renderTodoList(...todos) {
  let html = '<ul class="list-group">';

  for (const todo of todos) {
    html += renderTodoItem(todo);
  }
  html += `</ul>`;

  return html;
}
