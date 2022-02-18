import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/main.jpg";
import reviewImg from "../assets/overlap.jpg";
import { useGlobalContext } from "../context";

const Home = () => {
  const { data } = useGlobalContext();
  const products = data.slice(0, 3);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className="home">
      <div className="home-row">
        <div className="home-col">
          <h1>
            treat yo' self to
            <br />
            something good
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <button>
            <Link to="/products">shop now</Link>
          </button>
        </div>
        <div className="home-col-img">
          <div className="home-img-bx">
            <img src={home} alt="home" />
          </div>
        </div>
      </div>
      <div className="featured-products">
        <div className="featured-products-title">
          <h2 className="featured-products-title-text">Featured Products</h2>
          <div className="featured-products-underline"></div>
        </div>
        <div className="sliced-products">
          {products.map((item) => {
            const { image, title, price, id } = item;
            return (
              <article className="product" key={id}>
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
          })}
        </div>
        <button>
          <Link to="/products">all products</Link>
        </button>
      </div>
      <div className="reviews">
        <h2>they said about us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className="review-boxes">
          <div className="review-box">
            <div className="imgBx">
              <img src={reviewImg} alt="" />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              dignissimos ea nam veritatis natus veniam amet reprehenderit non,
              aperiam modi!
            </p>
            <h3>someone somewhere</h3>
          </div>
          <div className="review-box">
            <div className="imgBx">
              <img src={reviewImg} alt="" />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              dignissimos ea nam veritatis natus veniam amet reprehenderit non,
              aperiam modi!
            </p>
            <h3>someone somewhere</h3>
          </div>
          <div className="review-box">
            <div className="imgBx">
              <img src={reviewImg} alt="" />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              dignissimos ea nam veritatis natus veniam amet reprehenderit non,
              aperiam modi!
            </p>
            <h3>someone somewhere</h3>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="subscribe">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter Email" />
            <button>subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
