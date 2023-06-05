import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./routes/Home";
import { Todos } from "./routes/Todos";
import { NewTodo } from "./routes/NewTodo";
import { EditTodo } from "./routes/EditTodo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="todos">
          <Route path="new" element={<NewTodo />} />
          <Route path=":todoId" element={<EditTodo />} />
          <Route index element={<Todos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
