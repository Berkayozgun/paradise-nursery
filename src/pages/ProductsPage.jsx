import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const productsData = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    image: "/path-to-aloe-vera.jpg",
    category: "Succulents",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    image: "/path-to-snake-plant.jpg",
    category: "Succulents",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 25,
    image: "/path-to-peace-lily.jpg",
    category: "Flowering Plants",
  },
  {
    id: 4,
    name: "Fern",
    price: 18,
    image: "/path-to-fern.jpg",
    category: "Ferns",
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 10,
    image: "/path-to-spider-plant.jpg",
    category: "Succulents",
  },
  {
    id: 6,
    name: "Cactus",
    price: 12,
    image: "/path-to-cactus.jpg",
    category: "Cacti",
  },
];

const ProductsPage = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-6'>Our Plants</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {productsData.map((product) => (
          <div key={product.id} className='border p-4 rounded-lg'>
            <img
              src={product.image}
              alt={product.name}
              className='w-full h-40 object-cover mb-4'
            />
            <h2 className='text-xl font-semibold'>{product.name}</h2>
            <p className='text-gray-600'>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
