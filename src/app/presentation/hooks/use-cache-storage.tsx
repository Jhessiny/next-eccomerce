import { useContext } from "react";
import { CacheContext } from "../../main/providers/cache-provider";

export const useCacheStorage = () => {
  const cacheStorage = useContext(CacheContext);
  const getItem = (name: string) => {
    return cacheStorage.getItem(name);
  };

  const setItem = (name: string, value: string) => {
    return localStorage.setItem(name, value);
  };
  return { getItem, setItem };
};
