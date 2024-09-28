import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Redux store'dan toplam öğe sayısını al

  return (
    <header className='flex justify-between items-center p-4 bg-green-500 text-white'>
      <div className='flex flex-col items-center '>
        <Link to='/'>
          <h1 className='text-xl font-bold'>Paradise Nursery</h1>
          <h3 className='text-sm italic'>Where Green Meets Serenity</h3>
        </Link>
      </div>
      <div className='flex items-center justify-center text-xl'>
        <Link to='/products' className='mx-4'>
          Plants
        </Link>
      </div>
      <Link to='/cart' className='flex items-center justify-center'>
        <span>Cart ({totalQuantity})</span> {/* Toplam öğe sayısını göster */}
      </Link>
    </header>
  );
};

export default Header;
