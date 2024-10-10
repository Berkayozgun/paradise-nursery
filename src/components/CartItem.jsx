import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex items-center justify-between p-4 mb-4 border-b last:border-b-0'>
      <div className='flex items-center space-x-4'>
        <img
          src={item?.image}
          alt={item?.name}
          className='w-20 h-20 object-cover rounded'
        />
        <div>
          <p className='text-lg font-semibold'>{item?.name}</p>
          <p className='text-gray-500'>${item?.price?.toFixed(2)}</p>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <button
          onClick={() => dispatch(decrementQuantity(item))}
          className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'
        >
          -
        </button>
        <span className='font-semibold'>{item?.quantity}</span>
        <button
          onClick={() => dispatch(incrementQuantity(item))}
          className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'
        >
          +
        </button>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(item))}
        className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
