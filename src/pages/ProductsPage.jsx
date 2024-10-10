import React, { useState } from "react";
import { useDispatch } from "react-redux";
import productsData from "../data/data.js";
import ProductCard from "../components/ProductCard";
import { addToCart } from "../features/cart/cartSlice";

const ProductsPage = () => {
  const dispatch = useDispatch();
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
      <div className='mb-8 p-4'>
        <h3 className='text-xl font-bold mb-4'>{categoryName}</h3>
        <div className='flex flex-row flex-wrap p-4 gap-10'>
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isInCart={isInCart}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className='p-6 bg-white shadow-md rounded-lg mt-10'>
      <h1 className='text-4xl font-semibold mb-6 text-center'>Our Products</h1>
      {renderProductCategory("Air Purifying", airPurifyingItems)}
      {renderProductCategory("Decorative", decorativeItems)}
      {renderProductCategory("Aromatic Flagrant", aromaticFlagrantItems)}
    </div>
  );
};

export default ProductsPage;
