import React from "react";
import { NavItem, LoginLogout } from "./components";
import { RiShoppingCartLine } from "react-icons/ri";
import { useCartSelector, useRouteMatch } from "@/app/presentation/hooks";

export const Header = () => {
  const isCheckoutRoute = useRouteMatch("checkout");
  const { cartAmount, setIsCartOpen } = useCartSelector();

  const handleCartLink = () => {
    if (isCheckoutRoute) return;
    setIsCartOpen(true);
  };

  return (
    <nav className="bg-primary-main text-white mb-10 flex justify-end pr-2">
      <ul className="flex justify-end mr-2">
        <NavItem href="/products">Products</NavItem>
        <LoginLogout />
        <NavItem
          href="/"
          className="relative flex items-center"
          action={handleCartLink}
          disabled={isCheckoutRoute}
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
