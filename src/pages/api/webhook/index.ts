import { stripeSecretInstance } from "@/app/infra/stripe/get-stripe";
import { buffer } from "micro";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    let event;

    try {
      const rawBody = await buffer(req);
      const signature = req.headers["stripe-signature"];

      if (!signature) throw Error("Payment signature error");

      event = stripeSecretInstance.webhooks.constructEvent(
        rawBody.toString(),
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err) {
      const errorMessage =
        err && typeof err === "object" && "message" in err
          ? err.message
          : "Error";
      return res.status(500).json({
        statusCode: 500,
        message: errorMessage,
      });
    }
    console.log("✅ Success:", event.id);
    if (event.type === "checkout.session.completed") {
      console.log(`💰  Payment received!`);
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }
    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
