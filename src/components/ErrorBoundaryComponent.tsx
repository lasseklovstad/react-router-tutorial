import { useRouteError } from "react-router-dom";
import { ErrorMessage } from "./ErrorMessage";

export const ErrorBoundaryComponent = () => {
  const error = useRouteError();
  if (error instanceof Error) {
    return <ErrorMessage message={error.message} />;
  }
  return <ErrorMessage message={"Det oppstod en ukjent feil"} />;
};
