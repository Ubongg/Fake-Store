import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
const Checkout = () => {
  const publicKey = "pk_test_e3992992a05fe03a93bd935c8a27c4eee2347379";
  const amount = 1000000;
  const [email, setEmail] = useState("ubongeffiong5@gmail.com");
  const [name, setName] = useState("ubong");
  const [phone, setPhone] = useState("08160698880");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    // onSuccess: () =>
    //   alert("Thanks for doing business with us! Come back soon!!"),
    // onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div className="checkout">
      <div className="checkout-form">
        <form>
          <div className="checkout-field">
            <label>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </form>
        <button>
          <PaystackButton {...componentProps} />
        </button>
      </div>
    </div>
  );
};

export default Checkout;
