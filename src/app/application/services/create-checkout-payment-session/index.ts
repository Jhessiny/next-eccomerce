import { AxiosHttpClient } from "@/app/infra/protocols/http/protocols";
import { CreateCheckoutPaymentSession } from "./checkout-session";

export const createCheckoutPaymentSessionService =
  new CreateCheckoutPaymentSession(
    "/api/checkout-sessions",
    new AxiosHttpClient("next")
  );
