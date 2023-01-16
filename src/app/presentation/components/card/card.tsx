import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
  paddingClasses?: string;
};

export const Card = ({ children, className, paddingClasses }: Props) => {
  const padding = paddingClasses ?? "px-2 py-4";
  return (
    <div
      className={`${padding} bg-white rounded-md shadow-md relative ${className}`}
    >
      {children}
    </div>
  );
};
