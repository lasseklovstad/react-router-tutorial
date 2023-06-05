import { useParams } from "react-router-dom";
import { getTodo } from "../api/todos.api";
import { usePromise } from "../api/usePromise";
import { TodoForm } from "../components/TodoForm";
import { ErrorMessage } from "../components/ErrorMessage";

export const EditTodo = () => {
  const { todoId } = useParams();
  const {
    data: todo,
    state: { state, error },
  } = usePromise(() => getTodo(todoId));
  return (
    <main>
      <h2 className="text-xl text-left">Edit Todo</h2>
      {state === "loading" && <div>Loading todo...</div>}
      {state === "error" && error && (
        <ErrorMessage
          message={`Something went wrong when fetching todo with id ${todoId}: ${error}`}
        />
      )}
      {todo ? <TodoForm todo={todo} /> : null}
    </main>
  );
};
