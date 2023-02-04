import React from "react";
import { NavItem } from "./components/nav-item/nav-item";
import { RiShoppingCartLine } from "react-icons/ri";
import { useCartSelector } from "../../../../hooks";
import { LoginLogout } from "./components/login-logout/login-logout";
import { inlineFn } from "../../../../helpers";

export const Header = () => {
  const { cartAmount, setIsCartOpen } = useCartSelector();

  return (
    <nav className="bg-primary-main text-white mb-10 flex justify-end pr-2">
      <ul className="flex justify-end mr-2">
        <NavItem href="/products">Products</NavItem>
        <LoginLogout />
        <NavItem
          href="/"
          className="relative flex items-center"
          action={inlineFn(setIsCartOpen, true)}
        >
          <RiShoppingCartLine size={20} />{" "}
          <span className="bg-orange-400 flex justify-center items-center w-6 h-6  text-sm rounded-full absolute top-1 right-0">
            {cartAmount}
          </span>
        </NavItem>
      </ul>
    </nav>
  );
};
