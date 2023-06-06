import { useState } from "react";
import { useFetcher } from "react-router-dom";
import { Todo } from "../api/todos.api";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

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
  const fetcher = useFetcher();

  const getButtonText = () => {
    if (initialTodo) {
      return fetcher.state !== "idle" ? "Saving todo..." : "Save";
    }
    return fetcher.state !== "idle" ? "Create todo..." : "Create";
  };

  return (
    <fetcher.Form
      className="flex flex-col gap-4 text-left"
      method={initialTodo ? "POST" : "PUT"}
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
      <Button type="submit">{getButtonText()}</Button>
    </fetcher.Form>
  );
};
