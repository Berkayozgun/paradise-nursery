import React from "react";

const PaymentForm = ({ handlePayment }) => (
  <form onSubmit={handlePayment}>
    <h2 className='text-2xl font-semibold mb-6'>Checkout</h2>
    <div className='mb-4'>
      <label className='block text-gray-700'>Card Number</label>
      <input type='text' className='w-full px-3 py-2 border rounded' required />
    </div>
    <div className='mb-4'>
      <label className='block text-gray-700'>Expiry Date</label>
      <input type='text' className='w-full px-3 py-2 border rounded' required />
    </div>
    <div className='mb-4'>
      <label className='block text-gray-700'>CVV</label>
      <input type='text' className='w-full px-3 py-2 border rounded' required />
    </div>
    <button
      type='submit'
      className='w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
    >
      Pay Now
    </button>
  </form>
);

export default PaymentForm;