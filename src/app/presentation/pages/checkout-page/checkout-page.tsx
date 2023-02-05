import { useSession } from "next-auth/react";
import React from "react";
import { BackButton } from "../../components";
import { CartItemsList } from "../../components/cart/components";

export const CheckoutPage = () => {
  useSession({ required: true });

  return (
    <div className="overflow-y-scroll h-full max-w-256 mx-auto">
      <BackButton />
      <CartItemsList btn={{ action: () => null, text: "Go to payment" }} />
    </div>
  );
};
