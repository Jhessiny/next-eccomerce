import { useSession } from "next-auth/react";
import React, { useCallback, useEffect } from "react";
import StripeSingleton from "@/app/infra/stripe/get-stripe";
import { BackButton, CartItemsList } from "@/app/presentation/components";
import { useSendCheckoutPaymentSession } from "@/app/presentation/hooks";
import { inlineFn } from "@/app/presentation/helpers";

export const CheckoutPage = () => {
  useSession({ required: true });

  const {
    data,
    refetch: SendCheckoutPaymentSession,
    isSuccess,
  } = useSendCheckoutPaymentSession({
    items: [{ price: "price_1MXxzqHeK1nYaYWh8TuQDb84", quantity: 1 }],
  });

  const redirectToCheckout = useCallback(async () => {
    if (!data.id) return;
    const stripe = await StripeSingleton.getInstance();
    await stripe.redirectToCheckout({ sessionId: data.id });
  }, [data?.id]);

  useEffect(() => {
    if (isSuccess && data) redirectToCheckout();
  }, [isSuccess, redirectToCheckout, data]);

  return (
    <div className="overflow-y-scroll h-full max-w-256 mx-auto">
      <BackButton />
      <CartItemsList
        btn={{
          action: inlineFn(SendCheckoutPaymentSession),
          text: "Go to payment",
        }}
      />
    </div>
  );
};
