import { storyblokEditable } from "@storyblok/react";
import { render } from 'storyblok-rich-text-react-renderer';
import { useState, useEffect, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const DonateForm = ({disclaimerOne, disclaimerTwo}) => {
  const [clientSecret, setClientSecret] = useState("");
  const [subscription, setSubscription] = useState(false)
  const [amount, setAmount] = useState(20)

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [donationType, setDonationType] = useState("Individual")
  const [showOther, setShowOther] = useState(false)
  const [validationErrorMessage, setValidationErrorMessage] = useState(null)
  const [paymentOption, setPaymentOption] = useState(null)
  
  const otherAmountInputRef = useRef(null)
  const nameInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const businessNameInputRef = useRef(null)
  const businessEmailInputRef = useRef(null)
  const abnInputRef = useRef(null)
  const signupInputRef = useRef(null)


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
    setAmount(otherAmountInputRef.current.value)
    setShowOther(true)
  }

  const isValid = () => {
    if(donationType === "Individual" && amount > 0 && nameInputRef.current?.value.length > 1 && emailInputRef.current.value.length > 1){
      return true
    }
    if(donationType === "Business" && amount > 0 && businessEmailInputRef.current?.value.length > 1 && businessEmailInputRef.current.value.length > 1 && abnInputRef.current.value.length > 1){
      return true
    }
    return false
  }

  console.log(isValid())

    // console.log(isValid)
//   useEffect(() => {
  const loadPayment = () => {
    setPaymentOption("Card")
    // const mode = subscription ? "subscription" : "payment"
    let customer;
    if(donationType === "Individual"){
        customer = {
           name: nameInputRef.current.value,
           email: emailInputRef.current.value  
        }
    } else if (donationType === "Business") {
        customer = {
            businessName: businessNameInputRef.current.value,
            businessEmail: businessEmailInputRef.current.value,
            abn: abnInputRef.current.value    
         }
    }
    console.log(amount)
    // Create PaymentIntent as soon as the page loads
    if(isValid()) {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "donation", amount: amount }], customer: customer }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
}
  };

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="">
        {/* <div className="flex gap-2 justify-between mb-4">
            <button className={`border w-full rounded-full py-2 px-8 focus:outline-none focus:shadow-outline ${!subscription && "active-button"}`} onClick={() => handleSubscription(false)}>Once</button>
            <button className={`border w-full rounded-full py-2 px-8 focus:outline-none focus:shadow-outline ${subscription && "active-button"}`} onClick={() => handleSubscription(true)}>Monthly</button>
        </div> */}
        <div className="flex flex-wrap gap-2 justify-between mb-6">
            <button className={`border rounded-full flex-1 py-2 px-8 focus:outline-none focus:shadow-outline ${(amount === 10 && !showOther ) && "active-button"}`} onClick={() => handleSetPrice(10)} >$10</button>
            <button className={`border rounded-full flex-1 py-2 px-8 focus:outline-none focus:shadow-outline ${(amount === 20 && !showOther ) && "active-button"}`} onClick={() => handleSetPrice(20)}>$20</button>
            <button className={`border rounded-full flex-1 py-2 px-8 focus:outline-none focus:shadow-outline ${(amount === 30 && !showOther ) && "active-button"}`} onClick={() => handleSetPrice(30)}>$30</button>
            <button className={`border rounded-full flex-1 py-2 px-8 focus:outline-none focus:shadow-outline ${(amount === 50 && !showOther ) && "active-button"}`} onClick={() => handleSetPrice(50)}>$50</button>
            {!subscription && (
                <button className={`border flex-1 rounded-full py-2 px-8 focus:outline-none focus:shadow-outline ${showOther && "active-button"}`} onClick={() => setShowOther(true)}>
                    Other
                </button>
            )}
        </div>
        {!subscription && showOther && (
            <div className="mb-6">
                <label>Other</label>
                <input min="1" step="1" ref={otherAmountInputRef} onChange={() => handleSetOtherPrice()} className="mx-4 shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" />
                <span>AUD</span>
            </div>
        )}
        <div className="mb-6 mt-8 flex gap-2">
            <button className={`border w-full rounded-full py-2 px-8 focus:outline-none focus:shadow-outline ${donationType === "Individual" && "active-button"}`} onClick={() => handleDonationType("Individual")}>Individual</button>
            <button className={`border w-full rounded-full py-2 px-8 focus:outline-none focus:shadow-outline ${donationType === "Business" && "active-button"}`} onClick={() => handleDonationType("Business")}>Business</button>
        </div>
        {donationType === "Individual" && (
            <div>
                <div className="mb-6">
                    <label htmlFor="name">Name:</label>
                    <input ref={nameInputRef} required className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" />
                </div>
                <div className="mb-6">
                    <label html="email">Email:</label>
                    <input ref={emailInputRef} required className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
                </div>
            </div>
        )}
        {donationType === "Business" && (
            <div>
                <div className="mb-6">
                    <label htmlFor="business-name">Business Name:</label>
                    <input ref={businessNameInputRef} required className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="business-name" type="text" />
                </div>
                <div className="mb-6">
                    <label htmlFor="business-email">Email:</label>
                    <input ref={businessEmailInputRef} required className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="business-email" type="email" />
                </div>
                <div className="mb-6">
                    <label htmlFor="abn">ABN:</label>
                    <input ref={abnInputRef} required className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="abn" type="number" />
                </div>
            </div>
        )}
        <div className="mb-6">
            <label className=" block text-gray-500">
            <input  ref={signupInputRef} className="mr-2 leading-tight border-melon" type="checkbox" />
            <span className="text-sm">
                Keep Me Updated With What's Going On At Rebound
            </span>
            </label>
        </div>
        <div className="mb-12">
            <div className="text-xs">{render(disclaimerOne)}</div>
        </div>
        <div>
            <p className="font-bold mb-4">Payment Details</p>
            <button className={` mb-6 border w-content rounded-full py-2 px-8 focus:outline-none focus:shadow-outline ${paymentOption === "Card" && "active-button"}`} onClick={() => loadPayment()}>
                Card
            </button>
        </div>
        {clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm  name={nameInputRef.current.value || businessNameInputRef.current.value} email={ emailInputRef.current.value || businessEmailInputRef.current.value} signup={signupInputRef.current.checked} />
        </Elements>
      ) : (
         <div className="p-8 h-[100px] w-full bg-gray-light rounded-xl shadow-xl"></div>
      )} 
        <div>
            <div className="mt-12 text-xs">{render(disclaimerTwo)}</div>
        </div>
    </div>
  );
};

export default DonateForm;
