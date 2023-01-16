import Link from "next/link";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  href: string;
  className?: string;
  action?: () => void;
};

export const NavItem = ({ children, href, className = "", action }: Props) => {
  const handleAction = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.preventDefault();
    action?.();
  };
  return (
    <li className={`p-4 ${className}`}>
      <Link onClick={action ? handleAction : undefined} href={href}>
        {children}
      </Link>
    </li>
  );
};
