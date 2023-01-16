import React from "react";
import { useCartStore } from "../../../store";

export const useCartSelector = () => {
  const store = useCartStore();
  const getCartItem = (id: string) => store.cart.find((item) => item.id === id);

  const cartAmount = store.cart.reduce((acc, cur) => acc + cur.amount, 0);
  const getTotalPrice = () =>
    store.cart.reduce((acc, cur) => acc + cur.amount * cur.price, 0);

  return { ...store, getCartItem, cartAmount, getTotalPrice };
};
