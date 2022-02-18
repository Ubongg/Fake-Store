import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGlobalContext } from "../context";
// id, title, price, image, qty;

const CartItem = ({ item }) => {
  const { id, title, price, image, qty } = item;
  const { addCart, removeCart, removeProduct } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div className="item-details">
        <h4 className="item-title">{`${title.substring(0, 20)}...`}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => removeProduct(id)}>
          remove
        </button>
      </div>
      <div className="amount-container">
        {/* increase amount */}
        <button className="amount-btn" onClick={() => addCart(item)}>
          <FaChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{qty}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => removeCart(item)}>
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
