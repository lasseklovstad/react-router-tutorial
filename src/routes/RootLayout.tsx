import { Outlet, json, useLoaderData } from "react-router-dom";
import { Header } from "../components/Header";
import { getNumberOfTodos } from "../api/todos.api";

export const loader = async () => {
  return json({ numberOfTodos: await getNumberOfTodos() });
};

type LoaderData = {
  numberOfTodos: number;
};

export const RootLayout = () => {
  const { numberOfTodos } = useLoaderData() as LoaderData;
  return (
    <>
      <Header numberOfTodos={numberOfTodos} />
      <Outlet />
    </>
  );
};
