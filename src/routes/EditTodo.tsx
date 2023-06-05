import { LoaderFunction, json, useLoaderData } from "react-router-dom";
import { Todo, getTodo } from "../api/todos.api";
import { TodoForm } from "../components/TodoForm";

export const loader: LoaderFunction = async ({ params: { todoId } }) => {
  return json({ todo: await getTodo(todoId) } satisfies LoaderData);
};

type LoaderData = {
  todo: Todo;
};

export const EditTodo = () => {
  const { todo } = useLoaderData() as LoaderData;
  return (
    <main>
      <h2 className="text-xl text-left">Edit Todo</h2>

      <TodoForm todo={todo} />
    </main>
  );
};
