import React from "react";
import Product from "../components/Product";
import { useGlobalContext } from "../context";

const ProductList = () => {
  const { data, filter, setFilter, loading, setLoading, setData } =
    useGlobalContext();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const filterProducts = (category) => {
    const newItems = data.filter((item) => item.category === category);
    setFilter(newItems);
  };

  return (
    <div className="content">
      <div className="products-title">
        <h2 className="products-title-text">Our Products</h2>
        <div className="products-underline"></div>
      </div>
      <div className="buttons">
        <button onClick={() => setFilter(data)}>all</button>
        <button onClick={() => filterProducts("men's clothing")}>
          men's clothing
        </button>
        <button onClick={() => filterProducts("jewelery")}>jewelery</button>
        <button onClick={() => filterProducts("electronics")}>
          electronics
        </button>
        <button onClick={() => filterProducts("women's clothing")}>
          women's clothing
        </button>
      </div>
      <div className="box">
        {filter.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
