import { useState } from "react";
import { Todo, postTodo, putTodo } from "../api/todos.api";
import { useSubmitPromise } from "../api/usePromise";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";

type TodoFormProps = {
  todo?: Todo;
};

export const TodoForm = ({ todo: initialTodo }: TodoFormProps) => {
  const [todo, setTodo] = useState<Omit<Todo, "id" | "isDone">>(
    initialTodo ?? {
      title: "",
      description: "",
    }
  );
  const navigate = useNavigate();
  const {
    submit,
    state: { state, error },
  } = useSubmitPromise<Todo>();

  const getButtonText = () => {
    if (initialTodo) {
      return state === "loading" ? "Saving todo..." : "Save";
    }
    return state === "loading" ? "Create todo..." : "Create";
  };

  return (
    <form
      className="flex flex-col gap-4 text-left"
      onSubmit={async (ev) => {
        ev.preventDefault();
        const { state } = await submit(() =>
          initialTodo ? putTodo({ ...initialTodo, ...todo }) : postTodo(todo)
        );
        if (state === "success") {
          navigate("/todos");
        }
      }}
    >
      <Input
        label="Title"
        name="title"
        value={todo.title}
        onChange={(ev) => setTodo({ ...todo, title: ev.target.value })}
      />
      <Input
        label="Description"
        name="description"
        value={todo.description}
        onChange={(ev) => setTodo({ ...todo, description: ev.target.value })}
      />
      {state === "error" && error && <ErrorMessage message={error} />}
      <Button type="submit">{getButtonText()}</Button>
    </form>
  );
};
