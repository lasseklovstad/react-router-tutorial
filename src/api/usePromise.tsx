import { useState, useEffect, useCallback } from "react";

type PromiseState = {
  state: "loading" | "idle" | "error" | "success";
  error?: string;
};

export const usePromise = <Data,>(promiseCallback: () => Promise<Data>) => {
  const [data, setData] = useState<Data>();
  const [state, setState] = useState<PromiseState>({ state: "idle" });

  useEffect(() => {
    setState({ state: "loading" });
    promiseCallback()
      .then((data) => {
        setData(data);
        setState({ state: "success" });
      })
      .catch((error: Error) =>
        setState({ error: error.message, state: "error" })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, state };
};

export const useSubmitPromise = <Data,>() => {
  const [data, setData] = useState<Data>();
  const [state, setState] = useState<PromiseState>({ state: "idle" });

  const submit = (promiseCallback: () => Promise<Data>) => {
    setState({ state: "loading" });
    return promiseCallback()
      .then((data) => {
        setData(data);
        setState({ state: "success" });
        return { state: "success" };
      })
      .catch((error: Error) => {
        setState({ error: error.message, state: "error" });
        return { state: "error" };
      });
  };

  return { data, state, submit };
};
