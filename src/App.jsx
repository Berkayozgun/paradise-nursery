import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const location = useLocation(); // useLocation hook'unu kullanıyoruz

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      {location.pathname !== "/" && <Header cart={cart} />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route
          path='/products'
          element={<ProductsPage addToCart={addToCart} />}
        />
        <Route
          path='/cart'
          element={<CartPage cart={cart} updateCart={setCart} />}
        />
      </Routes>
    </>
  );
};

export default App;
