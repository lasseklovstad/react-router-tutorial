import {
  ActionFunction,
  LoaderFunction,
  json,
  redirect,
  useLoaderData,
} from "react-router-dom";
import { Todo, getTodo, putTodo } from "../api/todos.api";
import { TodoForm } from "../components/TodoForm";
import { ErrorBoundaryComponent } from "../components/ErrorBoundaryComponent";

export const action: ActionFunction = async ({
  request,
  params: { todoId },
}) => {
  const formData = await request.formData();
  const title = String(formData.get("title"));
  const description = String(formData.get("description"));
  const id = parseInt(String(todoId));
  await putTodo({ description, title, id, isDone: false });
  return redirect("/todos");
};

export const loader: LoaderFunction = async ({ params: { todoId } }) => {
  return json({ todo: await getTodo(todoId) } satisfies LoaderData);
};

type LoaderData = {
  todo: Todo;
};

export const Component = () => {
  const { todo } = useLoaderData() as LoaderData;
  return (
    <main>
      <h2 className="text-xl text-left">Edit Todo</h2>
      <TodoForm todo={todo} />
    </main>
  );
};

export const ErrorBoundary = () => <ErrorBoundaryComponent />;
