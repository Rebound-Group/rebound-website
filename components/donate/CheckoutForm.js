import { useState, useEffect, useRef } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

export default function CheckoutForm({name, email, signup}) {
  const stripe = useStripe();
  const elements = useElements();

//   const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [subscription, setSubscription] = useState(false)
  const [amount, setAmount] = useState(0)
  const [donationType, setDonationType] = useState("")
  const [showOther, setShowOther] = useState(false)
  const otherAmountInputRef = useRef(null)

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        // case "succeeded":
        //   setMessage("Payment succeeded!");
        //   break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
        //   setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubscription = (isSubscription) => {
    setSubscription(isSubscription)
  }

  const handleDonationType = (type) => {
    setDonationType(type)
  }

  const handleSetPrice = (amount) => {
    setAmount(amount)
    setShowOther(false)
  }

  const handleSetOtherPrice = () => {
    setAmount(0)
    setShowOther(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(signup){
        await fetch('/api/subscribe-user', {
            body: JSON.stringify({
              email: email,
              first_name: name,
            }),
    
            headers: {
              'Content-Type': 'application/json',
            },
    
            method: 'POST',
        });
    }

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "https://reboundgroup.org.au/donate?payment_success=true",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <>
    <form id="payment-form" onSubmit={handleSubmit}>    
    <div className="p-8 bg-gray-light rounded-xl shadow-xl">
      {/* <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target.value)}
      /> */}
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      </div>
      <button disabled={isLoading || !stripe || !elements} id="submit" className="mt-6 bg-melon rounded-full py-2 px-8 focus:outline-none focus:shadow-outline">
        <span id="button-text">
          {isLoading ? "Processing" : "Donate"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
    </>
  );
}
