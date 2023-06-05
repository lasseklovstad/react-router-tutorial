import { ElementType, ReactNode } from "react";

type ButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
};

export const Button = <T extends ElementType = "button">({
  children,
  as,
  ...buttonProps
}: ButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = as ?? "button";
  return (
    <Component
      className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-md px-4 py-2 focus:outline-none"
      {...buttonProps}
    >
      {children}
    </Component>
  );
};
