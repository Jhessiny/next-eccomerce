import { stripeSecretInstance } from "@/app/infra/stripe/get-stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const session = await stripeSecretInstance.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: req?.body?.items ?? [],
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/checkout`,
      });
      res.status(200).json(session);
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
}
