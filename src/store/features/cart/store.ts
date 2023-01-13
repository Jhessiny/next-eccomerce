import { CartItem, CartStore, PartialProductType } from "./types";
import { create } from "zustand";

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  increaseItemAmount: (product: PartialProductType) =>
    set((state) => ({
      ...state,
      cart: addItemToCart(product, state.cart),
    })),
  reduceItemAmount: (id: string) =>
    set((state) => ({
      ...state,
      cart: reduceItemAmount(id, state.cart),
    })),
  removeCartItem: (id: string) =>
    set((state) => ({
      ...state,
      cart: removeItemFromCart(id, state.cart),
    })),
}));

const addItemToCart = (product: PartialProductType, cart: CartItem[]) => {
  const newCart = [...cart];
  const cartItem = newCart.find((item) => item.id === product.id);
  if (cartItem) {
    cartItem.amount += 1;
    return newCart;
  }
  newCart.push({ ...product, amount: 1 });
  return newCart;
};

const reduceItemAmount = (id: string, cart: CartItem[]) => {
  const newCart = [...cart];
  const cartItem = newCart.find((item) => item.id === id)!;
  if (cartItem?.amount > 1) {
    cartItem.amount -= 1;
    return newCart;
  }

  return newCart.filter((item) => item.id !== id);
};

const removeItemFromCart = (id: string, cart: CartItem[]) =>
  cart.filter((item) => item.id !== id);