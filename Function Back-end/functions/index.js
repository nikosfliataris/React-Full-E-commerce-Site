const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JJIxgEYuwIRN68i48ZbCuAx5qhsNEg9yleMxCCoGCybHM8sfEC3TMVkt9rOz3UYVGjcfz5B3tZr01IbLswnHkoq00xh693J9F"
);

// API

//App Config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listener
exports.api = functions.https.onRequest(app);
//http://localhost:5001/fliataris-e-shop/us-central1/api
