import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ErrorBoundaryComponent } from "./components/ErrorBoundaryComponent";
import { RootLayout, loader as rootLoader } from "./routes/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorBoundaryComponent />,
    loader: rootLoader,
    element: <RootLayout />,
    children: [
      { path: "home", lazy: () => import("./routes/Home") },
      {
        path: "todos",
        children: [
          { path: "new", lazy: () => import("./routes/NewTodo") },
          {
            path: ":todoId",
            lazy: () => import("./routes/EditTodo"),
          },
          { index: true, lazy: () => import("./routes/Todos") },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
