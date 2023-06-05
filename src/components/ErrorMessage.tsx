type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="bg-red-500 font-bold p-4 text-left rounded-lg">
      {message}
    </div>
  );
};
