import { PropsWithChildren, useState } from "react";
import React from "react";
import { LocalStorage } from "../../infra/protocols/cache/local-storage";

const initialContext = {
  cache: new LocalStorage(),
  isLoginDialogOpen: false,
  toggleLoginDialogOpen: (param: boolean) => {},
};
export const Context = React.createContext(initialContext);

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [isLoginDialogOpen, toggleLoginDialogOpen] = useState(false);
  return (
    <Context.Provider
      value={{ ...initialContext, isLoginDialogOpen, toggleLoginDialogOpen }}
    >
      {children}
    </Context.Provider>
  );
};
