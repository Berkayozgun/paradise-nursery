import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Redux store'dan toplam öğe sayısını al

  return (
    <header className='flex justify-between p-4 bg-green-500 text-white'>
      <h1 className='text-lg font-bold'>Paradise Nursery</h1>
      <Link to='/cart' className='relative'>
        <span>Cart ({totalQuantity})</span> {/* Toplam öğe sayısını göster */}
      </Link>
    </header>
  );
};

export default Header;
