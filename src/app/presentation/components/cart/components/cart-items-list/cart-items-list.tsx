import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";
import { formatUSDPrice } from "../../../../../helpers/format-currency";
import { useCartSelector } from "../../../../hooks";
import { Button } from "../../../button/button";
import { CartItemComponent } from "../cart-item/cart-item";

type Props = {
  isSideCart?: boolean;
  btn: {
    action: React.MouseEventHandler<HTMLButtonElement>;
    text: string;
    fullWidth?: boolean;
  };
};

export const CartItemsList = ({
  btn: { action, text, fullWidth = false },
  isSideCart = false,
}: Props) => {
  const { cart: cartItems, getTotalPrice } = useCartSelector();
  const isEmpty = !Boolean(cartItems.length);
  const totalCart = formatUSDPrice(getTotalPrice());

  const btnClasses = fullWidth ? "w-full" : "w-auto";

  return (
    <div>
      {isEmpty && <p>No items yet</p>}
      {!isEmpty && (
        <>
          <h2 className="text-primary-main font-bold text-lg mb-3">
            Your items
          </h2>
          {cartItems.map((item) => (
            <CartItemComponent
              key={item.id}
              {...item}
              isSideCart={isSideCart}
            />
          ))}

          <div className="flex justify-between mt-4">
            <h4 className="font-bold">Total</h4>
            <p>{totalCart}</p>
          </div>

          <div className="flex justify-end">
            <Button className={twMerge("mt-6", btnClasses)} action={action}>
              {text}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
