import { InputHTMLAttributes, useId } from "react";

type InputProps = {
  label: string;
} & Pick<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "name">;

export const Input = ({ label, name, onChange, value }: InputProps) => {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="block text-sm font-semibold">
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  );
};
