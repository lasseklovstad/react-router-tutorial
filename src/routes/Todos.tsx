import { Link } from "react-router-dom";
import { getTodos } from "../api/todos.api";
import { usePromise } from "../api/usePromise";
import { Button } from "../components/Button";
import { ErrorMessage } from "../components/ErrorMessage";

export const Todos = () => {
  const {
    data: todos,
    state: { state, error },
  } = usePromise(() => getTodos());
  return (
    <main>
      <div className="flex justify-between">
        <h2 className="text-xl">Todos</h2>
        <Button as={Link} to="new">
          New todo
        </Button>
      </div>
      {state === "loading" && <div>Loading todos...</div>}
      {state === "error" && error && (
        <ErrorMessage
          message={`Something went wrong when fetching todos: ${error}`}
        />
      )}
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id} className="text-left">
            <Link to={todo.id.toString()}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
