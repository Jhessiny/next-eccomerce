import { AxiosHttpClient } from "@/app/infra/protocols/http/protocols";
import { LoadCheckoutPaymentSession } from "./checkout-session";

export const loadCheckoutPaymentSessionService = new LoadCheckoutPaymentSession(
  "/api/checkout-sessions",
  new AxiosHttpClient("next")
);
