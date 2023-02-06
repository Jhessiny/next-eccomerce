import { CreateCheckoutPaymentSession } from "./../../../application/services/create-checkout-payment-session/checkout-session";
import {
  loadCheckoutPaymentSessionService,
  createCheckoutPaymentSessionService,
} from "@/app/application/services";
import { useQuery } from "react-query";
export const useCheckoutPaymentSession = (id: string) => {
  return useQuery([`stripe-session-${id}`], () =>
    loadCheckoutPaymentSessionService.execute({ id })
  );
};

export const useSendCheckoutPaymentSession = (
  params: CreateCheckoutPaymentSession.Params
) => {
  return useQuery(
    [`stripe-session`],
    () => createCheckoutPaymentSessionService.execute(params),
    {
      enabled: false,
    }
  );
};
