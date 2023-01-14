import React, { PropsWithChildren, useState } from "react";
import { Cart } from "../cart/cart";
import { Header } from "./components/header/header";

type Props = PropsWithChildren;

export const Layout = ({ children }: Props) => {
  return (
    <div
      className=" bg-slate-50 shadow-sm min-h-max relative"
      style={{ minHeight: "100vh" }}
    >
      <Header />
      <div className="max-w-384 mx-auto px-4">{children}</div>
      <Cart />
    </div>
  );
};
