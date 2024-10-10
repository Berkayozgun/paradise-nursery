import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const totalQuantity = useSelector((state) => state.cart.totalQuantity) || 0;
  const totalPrice = useSelector((state) => state.cart.totalPrice) || 0;
  const navigate = useNavigate();

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Your Shopping Cart</h2>
      <div className='bg-white shadow-md rounded-lg p-4'>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item?.id} item={item} />)
        ) : (
          <p className='text-center text-gray-500'>Your cart is empty.</p>
        )}
      </div>
      <div className='mt-6 text-right'>
        <h3 className='text-lg font-semibold'>Total Items: {totalQuantity}</h3>
        <h3 className='text-xl font-bold'>
          Total Price: ${totalPrice.toFixed(2)}
        </h3>
      </div>

      <div className='mt-6'>
        <button
          onClick={() => navigate('/checkout')}
          className='w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Checkout
        </button>
      </div>

      <div className='mt-4'>
        <Link
          to='/products'
          className='w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 text-center block'
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
