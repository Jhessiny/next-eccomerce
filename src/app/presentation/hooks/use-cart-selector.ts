import { useMount } from "./use-mount";
import { useCallback, useEffect, useMemo } from "react";
import { useCartStore } from "@/store";
import { useCacheStorage } from "./use-cache-storage";

export const useCartSelector = () => {
  const store = useCartStore();
  const cache = useCacheStorage();
  const isFirstRender = useMount();
  const getCartItem = useCallback(
    (id: string) => store.cart.find((item) => item.id === id),
    [store]
  );

  const cartAmount = store.cart.reduce((acc, cur) => acc + cur.amount, 0);
  const getTotalPrice = useCallback(
    () => store.cart.reduce((acc, cur) => acc + cur.amount * cur.price, 0),
    [store]
  );

  useEffect(() => {
    if (isFirstRender) return;
    const items = store.cart;
    if (store.cart.length) cache.setItem("cart", JSON.stringify(items));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartAmount, isFirstRender, store.cart]);

  return useMemo(
    () => ({
      ...store,
      getCartItem,
      cartAmount,
      getTotalPrice,
    }),
    [store, getCartItem, cartAmount, getTotalPrice]
  );
};
