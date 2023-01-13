import Link from "next/link";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  href: string;
  className?: string;
};

export const NavItem = ({ children, href, className }: Props) => {
  return (
    <li className={`p-4 ${className}`}>
      <Link href={href}>{children}</Link>
    </li>
  );
};
