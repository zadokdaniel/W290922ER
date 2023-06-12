export class Todo {
    // constructor
    constructor({ id, title }) {
        // this.id;
        // this.title;
        // this.isComplete = false;
        // this.createdAt = new Date();
        this.isComplete = false;
        this.createdAt = new Date();
        this.id =
            typeof id === "number" && !Number.isNaN(id) ? id : Todo.CURRENT_ID++;
        this.title = title;
    }
}
// static
Todo.CURRENT_ID = 1;
