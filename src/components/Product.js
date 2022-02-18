import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, title, image, price }) => {
  return (
    <article className="product">
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <div className="product-footer">
        <h3>{`${title.substring(0, 20)}...`}</h3>
        <h4>${price}</h4>
        <Link to={`/products/${id}`} className="btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Product;
