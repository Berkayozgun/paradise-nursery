import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const productsData = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    image: "",
    category: "Air Purifying",
  },
  {
    id: 2,
    name: "Spider Plant",
    price: 12,
    image: "",
    category: "Air Purifying",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    image: "",
    category: "Air Purifying",
  },
  {
    id: 4,
    name: "Boston Fern",
    price: 20,
    image: "",
    category: "Air Purifying",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 25,
    image: "",
    category: "Air Purifying",
  },
  {
    id: 6,
    name: "Aloe Vera",
    price: 10,
    image: "",
    category: "Air Purifying",
  },
  {
    id: 7,
    name: "Lavender",
    price: 15,
    image: "",
    category: "Aromatic Flagrant",
  },
  {
    id: 8,
    name: "Jasmine",
    price: 20,
    image: "",
    category: "Aromatic Flagrant",
  },
  {
    id: 9,
    name: "Rosemary",
    price: 25,
    image: "",
    category: "Aromatic Flagrant",
  },
  {
    id: 10,
    name: "Mint",
    price: 5,
    image: "",
    category: "Aromatic Flagrant",
  },
  {
    id: 11,
    name: "Lemon Balm",
    price: 5,
    image: "",
    category: "Aromatic Flagrant",
  },
  {
    id: 12,
    name: "Hyacinth",
    price: 5,
    image: "",
    category: "Aromatic Flagrant",
  },
  {
    id: 13,
    name: "Lily",
    price: 5,
    image: "",
    category: "Decorative",
  },
  {
    id: 14,
    name: "Orchid",
    price: 5,
    image: "",
    category: "Decorative",
  },
  {
    id: 15,
    name: "Peace Lily",
    price: 5,
    image: "",
    category: "Decorative",
  },
  {
    id: 16,
    name: "Cactus",
    price: 5,
    image: "",
    category: "Decorative",
  },

  {
    id: 17,
    name: "Silver Nerve Plant",
    price: 5,
    image: "",
    category: "Decorative",
  },

  {
    id: 18,
    name: "Bamboo Palm",
    price: 5,
    image: "",
    category: "Decorative",
  },
];

const ProductsPage = ({ productsData }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedProducts, setAddedProducts] = useState(new Set());

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedProducts((prev) => new Set(prev).add(product.id)); // Ürünü ekle
  };

  const isInCart = (product) => {
    return addedProducts.has(product.id);
  };

  const airPurifyingItems = productsData.filter(
    (product) => product.category === "Air Purifying"
  );
  const decorativeItems = productsData.filter(
    (product) => product.category === "Decorative"
  );
  const aromaticFlagrantItems = productsData.filter(
    (product) => product.category === "Aromatic Flagrant"
  );
  const renderProductCategory = (categoryName, items) => {
    if (items.length === 0) return null;

    return (
      <div className='mb-8'>
        <h3 className='text-xl font-bold mb-4'>{categoryName}</h3>
        <div className='flex flex-row flex-wrap p-4 gap-20'>
          {items.map((product) => (
            <div
              key={product.id}
              className='border flex flex-col p-4 w-60 items-center justify-center rounded-lg'
            >
              <img
                src={product.image}
                alt={product.name}
                className='h-60 w-40 object-cover mb-4'
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
                disabled={isInCart(product)} // Buton durumu
                onClick={() => handleAddToCart(product)} // Butona tıklama
              >
                {isInCart(product) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className='container mx-auto p-4'>
      {renderProductCategory("Air Purifying", airPurifyingItems)}
      {renderProductCategory("Decorative", decorativeItems)}
      {renderProductCategory("Aromatic Flagrant", aromaticFlagrantItems)}
    </div>
  );
};

export default () => <ProductsPage productsData={productsData} />;
