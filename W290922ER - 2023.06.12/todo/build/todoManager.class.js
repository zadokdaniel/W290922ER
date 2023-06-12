import { Todo } from "./todo.class.js";
class TodoManager {
    // constructor
    constructor(ls_key = null) {
        // properties
        this.todos = [];
        this.ls_key = null;
        this.currentId = 1;
        this.ls_key = `todo-${ls_key}`;
        if (!this.ls_key) {
            return;
        }
        // validate ls_key not in use
        if (TodoManager.USED_LS_KEYS.includes(this.ls_key)) {
            throw new Error(`The key ${this.ls_key} is already in use`);
        }
        TodoManager.USED_LS_KEYS.push(this.ls_key);
        // get data from local storage
        const savedTodos = localStorage.getItem(this.ls_key);
        this.todos = savedTodos
            ? JSON.parse(savedTodos, (key, value) => {
                if (key === "createdAt") {
                    return new Date(value);
                }
                return value;
            }).map((todo) => new Todo({ id: todo.id, title: todo.title, }))
            : [];
    }
    // prototype
    save() {
        localStorage.setItem(this.ls_key, JSON.stringify(this.todos));
        localStorage.setItem(this.ls_key + "_id", String(this.currentId));
    }
    getTodos() {
        return this.todos;
    }
    addTodo(title) {
        if (title.length < 2) {
            throw new Error("todo's title must be at least 2 characters long");
        }
        const newTodo = new Todo({ id: this.currentId, title });
        this.todos = [...this.todos, newTodo];
        // save();
        return newTodo;
    }
    getTodoById(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (!todo) {
            throw new Error("the id provided is unknown");
        }
        return todo;
    }
    removeTodo(id) {
        const removed = this.getTodoById(id);
        this.todos = this.todos.filter((todo) => todo.id !== id);
        // save();
        return removed;
    }
    removeAllTodos() {
        this.todos = [];
        // save();
        return this.getTodos();
    }
    changeTodoIsComplete(id) {
        this.todos = this.todos.map((todo) => {
            if (todo.id === id) {
                return Object.assign(Object.assign({}, todo), { isComplete: !todo.isComplete });
            }
            return todo;
        });
        // save();
        return this.getTodoById(id);
    }
}
// static
TodoManager.USED_LS_KEYS = [];
console.log(new TodoManager("hello"));
console.log(new TodoManager("hello"));
// new TodoManager("hello");
