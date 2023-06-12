interface TodoOptions {
  title: string;
  id?: number;
  isComplete?: boolean
  createdAt?: 
}

export class Todo {
  // static
  static CURRENT_ID = 1;

  // properties
  id: number;
  title: string;
  isComplete: boolean = false;
  createdAt: Date = new Date();

  // constructor
  constructor({ id, title }: TodoOptions) {
    // this.id;
    // this.title;
    // this.isComplete = false;
    // this.createdAt = new Date();

    this.id =
      typeof id === "number" && !Number.isNaN(id) ? id : Todo.CURRENT_ID++;
    this.title = title;
  }

  // prototype
}
