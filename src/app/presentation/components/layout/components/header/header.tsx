import React from "react";
import { NavItem } from "./components/nav-item/nav-item";

export const Header = () => {
  return (
    <nav className="bg-primary-main text-white mb-10 flex justify-end">
      <ul className="flex justify-end mr-2">
        <NavItem href="/products">Products</NavItem>
        <NavItem href="/">Profile</NavItem>
        <NavItem href="/">Cart</NavItem>
      </ul>
    </nav>
  );
};
