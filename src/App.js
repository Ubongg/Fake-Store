import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import ProductList from "./pages/ProductList";
import CartContainer from "./pages/CartContainer";
import Error from "./pages/Error";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
