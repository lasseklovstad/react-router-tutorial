let todoId = 0;

const createTodo = (todo: Partial<Todo>) => {
  return {
    id: todoId++,
    title: "Empty Todo",
    description: "",
    isDone: false,
    ...todo,
  };
};

let todos = [
  createTodo({ title: "Vask dass", description: "Bruk såpe" }),
  createTodo({ title: "Spis mat", description: "Ikke usunt" }),
];

export type Todo = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
};

const timeout = 500;

export const getTodos = (): Promise<Todo[]> => {
  return new Promise((res) => {
    setTimeout(() => res(todos), timeout);
  });
};

export const getTodo = (id: string | undefined): Promise<Todo> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const todo = todos.find((t) => t.id.toString() === id);
      if (todo) {
        res(todo);
      } else {
        rej(new Error("Todo not found"));
      }
    }, timeout);
  });
};

export const postTodo = (
  newTodo: Pick<Todo, "description" | "title">
): Promise<Todo> => {
  return new Promise((res) => {
    setTimeout(() => {
      const todo = createTodo(newTodo);
      todos = [...todos, todo];
      res(todo);
    }, timeout);
  });
};

export const putTodo = (todo: Todo): Promise<Todo> => {
  return new Promise((res) => {
    setTimeout(async () => {
      todos = todos.map((t) => (t.id === todo.id ? todo : t));
      res(await getTodo(todo.id.toString()));
    }, timeout);
  });
};

export const patchTodoDone = (
  todo: Pick<Todo, "id" | "isDone">
): Promise<Todo> => {
  return new Promise((res) => {
    setTimeout(async () => {
      todos = todos.map((t) => (t.id === todo.id ? { ...t, todo } : t));
      res(await getTodo(todo.id.toString()));
    }, timeout);
  });
};
