import { useCallback, useContext, useMemo } from "react";
import { Context } from "@/app/main/providers";

export const useCacheStorage = () => {
  const { cache } = useContext(Context);
  const getItem = useCallback(
    (name: string) => {
      return cache.getItem(name);
    },
    [cache]
  );

  const setItem = useCallback(
    (name: string, value: string) => {
      return cache.setItem(name, value);
    },
    [cache]
  );
  return useMemo(
    () => ({
      getItem,
      setItem,
    }),
    [getItem, setItem]
  );
};
