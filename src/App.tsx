import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import {
  EditTodo,
  loader as editTodoLoader,
  action as editTodoAction,
} from "./routes/EditTodo";
import { NewTodo, action as newTodoAction } from "./routes/NewTodo";
import { Todos, loader as todosLoader } from "./routes/Todos";
import { Home } from "./routes/Home";
import { ErrorBoundary } from "./components/ErrorBoundary";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    element: <RootLayout />,
    children: [
      { path: "home", element: <Home /> },
      {
        path: "todos",
        children: [
          { path: "new", element: <NewTodo />, action: newTodoAction },
          {
            path: ":todoId",
            element: <EditTodo />,
            loader: editTodoLoader,
            action: editTodoAction,
            errorElement: <ErrorBoundary />,
          },
          { index: true, element: <Todos />, loader: todosLoader },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
