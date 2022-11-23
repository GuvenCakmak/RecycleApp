const express = require("express");
const Stripe = require("stripe");

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.cartItems.cartItems.map((item) => {
    return {
      price_data: {
        currency: "sek",
        product_data: {
          name: item.name,
          images: [item.image],
          description: item.desc,
          metadata: {
            id: item.id
          }
        },
        unit_amount: item.price * 100
      },
      quantity: item.cartQuantity
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
    payment_method_types: ["card"]
    //   success_url: `${YOUR_DOMAIN}?success=true`,
    //   cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  res.send({ url: session.url });
  //   res.redirect(303, session.url);
});

module.exports = router;
