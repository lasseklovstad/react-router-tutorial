import { ActionFunction, redirect } from "react-router-dom";
import { TodoForm } from "../components/TodoForm";
import { postTodo } from "../api/todos.api";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = String(formData.get("title"));
  const description = String(formData.get("description"));
  await postTodo({ description, title });
  return redirect("/todos");
};

export const NewTodo = () => {
  return (
    <main>
      <h2 className="text-xl text-left">New Todo</h2>
      <TodoForm />
    </main>
  );
};
