import React from "react";
import { useGlobalContext } from "../context";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, setCart, totalPrice, shippingFee, orderTotal } =
    useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
          <Link className="fill-cart" to="/products">
            fill it
          </Link>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
        <div className="cart-underline"></div>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        {/* <div className="cart-total">
          <h4>
            total <span>${totalPrice}</span>
          </h4>
        </div> */}
        <div className="footer-btns">
          <button className="to-cart">
            <Link to="/products">continue shopping</Link>
          </button>
          <button className="btn clear-btn" onClick={() => setCart([])}>
            clear cart
          </button>
        </div>
      </footer>
      <div className="checkout-box">
        <article className="checkout-content">
          <h5>
            subtotal : <span>${totalPrice}</span>
          </h5>
          <p>
            shipping fee : <span>${shippingFee}</span>
          </p>
          <hr />
          <h4>
            order total : <span>${orderTotal}</span>
          </h4>
        </article>
        <button className="checkout-btn">
          <Link to="/checkout">proceed to checkout</Link>
        </button>
      </div>
    </section>
  );
};

export default CartContainer;
