import Head from "next/head";
import React, { PropsWithChildren, useContext, useState } from "react";
import { Context } from "../../../main/providers/context-provider";
import { Cart } from "../cart/cart";
import { LoginDialog } from "../login-dialog/login-dialog";
import { Header } from "./components/header/header";

type Props = PropsWithChildren;

export const Layout = ({ children }: Props) => {
  const { isLoginDialogOpen } = useContext(Context);
  return (
    <>
      <Head>
        <title>Buy buy</title>
      </Head>

      <div
        className=" bg-slate-50 shadow-sm min-h-max relative"
        style={{ minHeight: "100vh" }}
      >
        <Header />
        {isLoginDialogOpen && <LoginDialog />}
        <div className="max-w-384 mx-auto px-4">{children}</div>
        <Cart />
      </div>
    </>
  );
};
