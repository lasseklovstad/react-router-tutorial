import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { EditTodo } from "./routes/EditTodo";
import { NewTodo } from "./routes/NewTodo";
import { Todos } from "./routes/Todos";
import { Home } from "./routes/Home";

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
    element: <RootLayout />,
    children: [
      { path: "home", element: <Home /> },
      {
        path: "todos",
        children: [
          { path: "new", element: <NewTodo /> },
          { path: ":todoId", element: <EditTodo /> },
          { index: true, element: <Todos /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
