import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { PaystackButton } from "react-paystack";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { ngnTotal, orderTotal, setCart } = useGlobalContext();
  const { user } = useAuth0();
  const publicKey = "pk_test_e3992992a05fe03a93bd935c8a27c4eee2347379";
  const amount = ngnTotal * 500 + "00";
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      navigate("/");
      setCart([]);
    },

    // onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div className="checkout">
      <div className="checkout-info">
        <h4>Hello, {user.name}</h4>
        <p>Your total is ${orderTotal}</p>
      </div>
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
        <PaystackButton {...componentProps} className="paystackbtn" />
      </div>
    </div>
  );
};

export default Checkout;
