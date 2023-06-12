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
    localStorage.setItem(TODO_CURRENT_ID_LS_KEY, String(currentId));
}
export function getTodos() {
    return todos;
}
export function addTodo(title) {
    if (title.length < 2) {
        throw new Error("todo's title must be at least 2 characters long");
    }
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
    if (!todo) {
        throw new Error("the id provided is unknown");
    }
    return todo;
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
            return Object.assign(Object.assign({}, todo), { isComplete: !todo.isComplete });
        }
        return todo;
    });
    save();
    return getTodoById(id);
}
