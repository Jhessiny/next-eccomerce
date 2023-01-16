import { useMount } from "./use-mount";
import { useEffect } from "react";
import { useCartStore } from "../../../store";
import { useCacheStorage } from "./use-cache-storage";

export const useCartSelector = () => {
  const store = useCartStore();
  const cache = useCacheStorage();
  const isFirstRender = useMount();
  const getCartItem = (id: string) => store.cart.find((item) => item.id === id);

  const cartAmount = store.cart.reduce((acc, cur) => acc + cur.amount, 0);
  const getTotalPrice = () =>
    store.cart.reduce((acc, cur) => acc + cur.amount * cur.price, 0);

  useEffect(() => {
    if (isFirstRender) return;
    const items = store.cart;
    if (store.cart.length) cache.setItem("cart", JSON.stringify(items));
  }, [cartAmount, isFirstRender, store.cart]);

  return {
    ...store,
    getCartItem,
    cartAmount,
    getTotalPrice,
  };
};
