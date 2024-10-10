import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductCard = ({ product, isInCart, handleAddToCart }) => {
  return (
    <div className='flex flex-col p-4 w-80 items-center justify-center rounded-2xl shadow-xl hover:shadow-2xl transition-shadow'>
      <img
        src={product.image}
        alt={product.name}
        className='h-60 w-40 object-cover mb-4 rounded-lg shadow-sm'
      />
      <h2 className='text-xl font-semibold'>{product.name}</h2>
      <p className='text-gray-600'>${product.price}</p>
      <button
        className={`px-4 py-2 rounded-lg mt-4 
          ${
            isInCart(product)
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        onClick={() => handleAddToCart(product)}
        disabled={isInCart(product)}
      >
        {isInCart(product) ? "In Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;