import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { useState, useEffect, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { userAgent } from "next/server";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const DonateForm = ({ disclaimerOne, disclaimerTwo }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [amount, setAmount] = useState(20);
  const [isCreatingIntent, setIsCreatingIntent] = useState(false);

  // const [message, setMessage] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [donationType, setDonationType] = useState("Individual");
  const [showOther, setShowOther] = useState(false);
  // const [validationErrorMessage, setValidationErrorMessage] = useState(null);
  const [paymentOption, setPaymentOption] = useState(null);

  const otherAmountInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const [nameVal, setNameVal] = useState("");
  const emailInputRef = useRef(null);
  const [emailVal, setEmailVal] = useState("");
  const businessNameInputRef = useRef(null);
  const [businessNameVal, setBusinessNameVal] = useState("");
  const businessEmailInputRef = useRef(null);
  const [businessEmailVal, setBusinessEmailVal] = useState("");
  const abnInputRef = useRef(null);
  const [abnVal, setAbnVal] = useState("");
  const signupInputRef = useRef(null);

  const [isValid, setIsValid] = useState(false);

  const handleSubscription = (isSubscription) => {
    setSubscription(isSubscription);
  };

  const handleDonationType = (type) => {
    setDonationType(type);
  };

  const handleSetPrice = (amount) => {
    setAmount(amount);
    setShowOther(false);
  };

  const handleSetOtherPrice = () => {
    setAmount(otherAmountInputRef.current.value);
    setShowOther(true);
  };

  const onNameChange = (e) => {
    setNameVal(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmailVal(e.target.value);
  };
  const onBusinessNameChange = (e) => {
    setBusinessNameVal(e.target.value);
  };
  const onBusinessEmailChange = (e) => {
    setBusinessEmailVal(e.target.value);
  };
  const onAbnChange = (e) => {
    setAbnVal(e.target.value);
  };

  const ValidateEmail = (value) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return value.match(validRegex);
  };

  useEffect(() => {
    const localIsValid = () => {
      if (
        donationType === "Individual" &&
        amount > 0 &&
        nameVal.length > 1 &&
        emailVal.length > 1 &&
        ValidateEmail(emailVal)
      ) {
        return true;
      }
      if (
        donationType === "Business" &&
        amount > 0 &&
        businessNameVal.length > 1 &&
        businessEmailVal.length > 1 &&
        ValidateEmail(businessEmailVal) &&
        abnVal.length > 1
      ) {
        return true;
      }
      return false;
    };
    setIsValid(localIsValid);
  }, [
    donationType,
    amount,
    nameVal,
    emailVal,
    businessNameVal,
    businessEmailVal,
    abnVal,
  ]);

  const loadPayment = () => {
    setPaymentOption("Card");
    // const mode = subscription ? "subscription" : "payment"
    let customer;
    if (donationType === "Individual") {
      customer = {
        name: nameVal,
        email: emailVal,
      };
    } else if (donationType === "Business") {
      customer = {
        businessName: businessNameVal,
        businessEmail: businessEmailVal,
        abn: abnVal,
      };
    }

    // Create PaymentIntent as soon as the page loads
    if (isValid) {
      setIsCreatingIntent(true);
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: [{ id: "donation", amount: amount }],
          customer: customer,
        }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
        .then(() => {
          setIsCreatingIntent(false);
        });
    }
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="">
      <div className="flex flex-wrap gap-2 justify-between mb-6">
        <button
          className={`border rounded-full flex-1 py-2 px-8 focus:outline-none focus:shadow-outline ${
            amount === 20 && !showOther && "active-button"
          }`}
          onClick={() => handleSetPrice(20)}
        >
          $20
        </button>
        <button
          className={`border rounded-full flex-1 py-2 px-8 focus:outline-none focus:shadow-outline ${
            amount === 50 && !showOther && "active-button"
          }`}
          onClick={() => handleSetPrice(50)}
        >
          $50
        </button>
        <button
          className={`border rounded-full flex-1 py-2 px-8 focus:outline-none focus:shadow-outline ${
            amount === 100 && !showOther && "active-button"
          }`}
          onClick={() => handleSetPrice(100)}
        >
          $100
        </button>
        <button
          className={`border rounded-full flex-1 py-2 px-8 focus:outline-none focus:shadow-outline ${
            amount === 500 && !showOther && "active-button"
          }`}
          onClick={() => handleSetPrice(500)}
        >
          $500
        </button>
        {!subscription && (
          <button
            className={`border flex-1 rounded-full py-2 px-8 focus:outline-none focus:shadow-outline ${
              showOther && "active-button"
            }`}
            onClick={() => setShowOther(true)}
          >
            Other
          </button>
        )}
      </div>
      {!subscription && showOther && (
        <div className="mb-6">
          <label>Other</label>
          <input
            min="1"
            step="1"
            ref={otherAmountInputRef}
            onChange={() => handleSetOtherPrice()}
            className="mx-4 shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
          />
          <span>AUD</span>
        </div>
      )}
      <div className="mb-6 mt-8 flex gap-2">
        <button
          className={`border w-full rounded-full py-2 px-8 focus:outline-none focus:shadow-outline ${
            donationType === "Individual" && "active-button"
          }`}
          onClick={() => handleDonationType("Individual")}
        >
          Individual
        </button>
        <button
          className={`border w-full rounded-full py-2 px-8 focus:outline-none focus:shadow-outline ${
            donationType === "Business" && "active-button"
          }`}
          onClick={() => handleDonationType("Business")}
        >
          Business
        </button>
      </div>
      {donationType === "Individual" && (
        <div>
          <div className="mb-6">
            <label htmlFor="name">Name *</label>
            <input
              ref={nameInputRef}
              onChange={onNameChange}
              placeholder="Name"
              required
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label html="email">Email *</label>
            <input
              ref={emailInputRef}
              onChange={onEmailChange}
              placeholder="Email"
              required
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
            />
          </div>
        </div>
      )}
      {donationType === "Business" && (
        <div>
          <div className="mb-6">
            <label htmlFor="business-name">Business name *</label>
            <input
              ref={businessNameInputRef}
              onChange={onBusinessNameChange}
              placeholder="Business name"
              required
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="business-name"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="business-email">Email * </label>
            <input
              ref={businessEmailInputRef}
              onChange={onBusinessEmailChange}
              placeholder="Email"
              required
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="business-email"
              type="email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="abn">ABN * </label>
            <input
              ref={abnInputRef}
              onChange={onAbnChange}
              placeholder="ABN"
              required
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="abn"
              type="number"
            />
          </div>
        </div>
      )}
      <div className="mb-6">
        <label className=" block text-gray-500">
          <input
            ref={signupInputRef}
            className="mr-2 leading-tight border-melon"
            type="checkbox"
          />
          <span className="text-sm">
            Receive updates on the Rebound Project? (Unsubscribe any time)
          </span>
        </label>
      </div>
      <div className="mb-8">
        <div className="text-xs">{render(disclaimerOne)}</div>
      </div>
      <div>
        <p className="font-bold mb-4">Payment Details</p>
        <button
          className={`mb-6 border w-content rounded-full py-2 px-8 focus:outline-none focus:shadow-outline ${
            paymentOption === "Card" && "active-button"
          }`}
          disabled={!isValid}
          onClick={() => loadPayment()}
        >
          Card
        </button>
      </div>
      {clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm
            name={nameVal || businessNameVal || "Name not set"}
            email={emailVal || businessEmailVal || "Email not set"}
            signup={signupInputRef.current.checked}
          />
        </Elements>
      ) : isCreatingIntent ? (
        <div className="p-8 h-[90px] w-full bg-gray-light rounded-xl shadow-xl">
          <p>Please wait...</p>
        </div>
      ) : isValid ? (
        <div className="p-8 h-[90px] w-full bg-gray-light rounded-xl shadow-xl">
          <p>Please select payment type</p>
        </div>
      ) : (
        <div className="p-8 h-[90px] w-full bg-gray-light rounded-xl shadow-xl">
          {donationType === "Individual" ? (
            <p>Please fill in your Individual details</p>
          ) : (
            <p>Please fill in your Business details</p>
          )}
        </div>
      )}
      <div>
        <div className="mt-12 text-xs">{render(disclaimerTwo)}</div>
      </div>
    </div>
  );
};

export default DonateForm;
