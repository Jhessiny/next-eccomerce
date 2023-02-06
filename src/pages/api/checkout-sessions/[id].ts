import { stripeSecretInstance } from "@/app/infra/stripe/get-stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  try {
    if (!id.startsWith("cs_")) {
      throw Error("Incorrect CheckoutSession ID");
    }
    const checkout_session =
      await stripeSecretInstance.checkout.sessions.retrieve(id);
    res.status(200).json(checkout_session);
  } catch (err) {
    const errorMessage =
      err && typeof err === "object" && "message" in err
        ? err.message
        : "Error";
    res.status(500).json({
      statusCode: 500,
      message: errorMessage,
    });
  }
}
