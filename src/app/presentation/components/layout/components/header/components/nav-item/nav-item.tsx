import Link from "next/link";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  href: string;
};

export const NavItem = ({ children, href }: Props) => {
  return (
    <li className="p-4">
      <Link href={href}>{children}</Link>
    </li>
  );
};
