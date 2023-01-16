import { PropsWithChildren } from "react";
import React from "react";
import { LocalStorage } from "../../infra/protocols/cache/local-storage";

const localStorage = new LocalStorage();
export const CacheContext = React.createContext(localStorage);

export const CacheProvider = ({ children }: PropsWithChildren) => {
  return (
    <CacheContext.Provider value={localStorage}>
      {children}
    </CacheContext.Provider>
  );
};
