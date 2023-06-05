import { Link, LoaderFunction, json, useLoaderData } from "react-router-dom";
import { Todo, getTodos } from "../api/todos.api";
import { Button } from "../components/Button";

export const loader: LoaderFunction = async () => {
  return json({ todos: await getTodos() } satisfies LoaderData);
};

type LoaderData = {
  todos: Todo[];
};

export const Todos = () => {
  const { todos } = useLoaderData() as LoaderData;
  return (
    <main>
      <div className="flex justify-between">
        <h2 className="text-xl">Todos</h2>
        <Button as={Link} to="new">
          New todo
        </Button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="text-left">
            <Link to={todo.id.toString()}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
