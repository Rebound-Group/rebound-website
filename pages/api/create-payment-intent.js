// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateTax = async (items, currency) => {
  const taxCalculation = await stripe.tax.calculations.create({
    currency,
    customer_details: {
      address: {
        country: "AU",
      },
      address_source: "shipping",
    },
    line_items: items.map((item) => buildLineItem(item)),
  });

  return taxCalculation;
};

const buildLineItem = (item) => {
  return {
    amount: item.amount, // Amount in cents
    reference: item.id, // Unique reference for the item in the scope of the calculation
  };
};

// Securely calculate the order amount, including tax
const calculateOrderAmount = (items, taxCalculation) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total with any exclusive taxes on the server to prevent
  // people from directly manipulating the amount on the client
  let orderAmount = items[0].amount * 100;
  orderAmount += taxCalculation.tax_amount_exclusive;
  return orderAmount;
};

export default async function handler(req, res) {
  const { items, customer, mode } = req.body;
  const taxCalculation = await calculateTax(items, "aud");
  const amount = await calculateOrderAmount(items, taxCalculation);

  const newCustomer = await stripe.customers.create({
    email: customer.email,
    name: customer.name,
    ...(customer.abn && {tax_id_data: [{type: "au_abn", value:customer.abn}]}),
  });
  
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "aud",
    customer: newCustomer.id,
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    // automatic_payment_methods: {
    //   enabled: true,
    // },
    payment_method_types: [
      "card"
    ],
    metadata: {
      tax_calculation: taxCalculation.id,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });

  // Invoke this method in your webhook handler when `payment_intent.succeeded` webhook is received
  const handlePaymentIntentSucceeded = async (paymentIntent) => {
    // Create a Tax Transaction for the successful payment
    stripe.tax.transactions.createFromCalculation({
      calculation: paymentIntent.metadata['tax_calculation'],
      reference: 'myOrder_123', // Replace with a unique reference from your checkout/order system
    });
  };
};