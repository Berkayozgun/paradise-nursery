import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { downloadInvoice } from "../features/cart/InvoiceDownload";
import PaymentForm from "../components/PaymentForm";
import PaymentSuccess from "../components/PaymentSuccess";

const CheckoutPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const totalPrice = useSelector((state) => state.cart.totalPrice) || 0;

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);

    const customerInfo = {
      name: "John Doe",
      email: "john.doe@example.com",
    };
    downloadInvoice(cartItems, totalPrice, customerInfo);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className='max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10'>
      {paymentSuccess ? (
        <PaymentSuccess />
      ) : (
        <PaymentForm handlePayment={handlePayment} />
      )}
    </div>
  );
};

export default CheckoutPage;
