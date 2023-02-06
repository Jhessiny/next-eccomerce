import { loadStripe, Stripe as StripeType } from "@stripe/stripe-js";
import Stripe from "stripe";

export default class StripeSingleton {
  private static instance: StripeSingleton & StripeType;

  private constructor() {}

  public static async getInstance(): Promise<StripeSingleton & StripeType> {
    if (!StripeSingleton.instance) {
      StripeSingleton.instance = (await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      ))!;
    }

    return StripeSingleton.instance;
  }
}

export const stripeSecretInstance = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});
