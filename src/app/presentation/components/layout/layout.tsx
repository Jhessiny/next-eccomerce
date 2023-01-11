import React, { PropsWithChildren } from "react";
import { Header } from "./components/header/header";

type Props = PropsWithChildren;

export const Layout = ({ children }: Props) => {
  return (
    <div className=" bg-slate-100 min-h-max" style={{ minHeight: "100vh" }}>
      <Header />
      <div className="max-w-384 mx-auto px-4">{children}</div>
    </div>
  );
};
