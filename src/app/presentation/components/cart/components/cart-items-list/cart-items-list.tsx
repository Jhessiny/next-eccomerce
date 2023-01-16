import { useRouter } from "next/router";
import React from "react";
import { formatUSDPrice } from "../../../../../helpers/format-currency";
import { useCartSelector } from "../../../../hooks";
import { Button } from "../../../button/button";
import { CartItemComponent } from "../cart-item/cart-item";

export const CartItemsList = () => {
  const { cart: cartItems, getTotalPrice } = useCartSelector();
  const route = useRouter();
  const isEmpty = !Boolean(cartItems.length);
  const totalCart = formatUSDPrice(getTotalPrice());

  return (
    <div>
      {isEmpty && <p>No items yet</p>}
      {!isEmpty && (
        <>
          <h2 className="text-primary-main font-bold text-lg mb-3">
            Your items
          </h2>
          {cartItems.map((item) => (
            <CartItemComponent key={item.id} {...item} />
          ))}

          <div className="flex justify-between mt-4">
            <h4 className="font-bold">Total</h4>
            <p>{totalCart}</p>
          </div>

          <Button
            className="w-full mt-6"
            action={() => route.push("/checkout")}
          >
            Checkout
          </Button>
        </>
      )}
    </div>
  );
};
