import { useContext } from "react";
import { Context } from "../../main/providers/context-provider";

export const useCacheStorage = () => {
  const { cache } = useContext(Context);
  const getItem = (name: string) => {
    return cache.getItem(name);
  };

  const setItem = (name: string, value: string) => {
    return cache.setItem(name, value);
  };
  return { getItem, setItem };
};
