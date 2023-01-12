import clsx from "clsx";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    action: (params?: unknown) => void;
    className?: string;
  };

export const Button = ({ action, children, className, ...rest }: Props) => {
  return (
    <button
      onClick={action}
      className={`rounded-full py-2 px-6 bg-primary-main hover:bg-primary-dark transition-all duration-300 text-white font-bold flex justify-center items-center text-center ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
