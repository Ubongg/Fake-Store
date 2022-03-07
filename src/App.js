import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import ProductList from "./pages/ProductList";
import CartContainer from "./pages/CartContainer";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
