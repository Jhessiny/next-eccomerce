import { useSession } from "next-auth/react";
import React from "react";
import { CartItemsList } from "../../components/cart/components";

export const CheckoutPage = () => {
  const {} = useSession({ required: true });
  return (
    <div>
      <div className="overflow-y-scroll h-full">
        <CartItemsList btn={{ action: () => null, text: "Go to payment" }} />
      </div>
    </div>
  );
};
