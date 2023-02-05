import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = PropsWithChildren & {
  href: string;
  className?: string;
  action?: () => void;
  disabled?: boolean;
};

export const NavItem = ({
  children,
  href,
  className = "",
  action,
  disabled,
}: Props) => {
  const handleAction = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.preventDefault();
    action?.();
  };

  return (
    <li className={twMerge(`p-4 ${className}`)}>
      <Link
        onClick={action ? handleAction : undefined}
        href={href}
        className={disabled ? "cursor-auto" : ""}
      >
        {children}
      </Link>
    </li>
  );
};
