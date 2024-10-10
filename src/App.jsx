import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Spinner from "./components/Spinner";

// Lazy load components
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Header = lazy(() => import("./components/Header"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));

const App = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Spinner />}>
      {/* Show Header on all pages except the LandingPage */}
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default App;
