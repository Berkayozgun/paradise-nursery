import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // Get total quantity of items in cart from Redux store
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className='flex justify-between items-center p-4 bg-green-600 text-white shadow-md'>
      <div className='flex items-center space-x-4'>
        <Link to='/' className='flex items-center space-x-2'>
          <div>
            <h1 className='text-2xl font-bold'>Paradise Nursery</h1>
            <h3 className='text-sm italic'>Where Green Meets Serenity</h3>
          </div>
        </Link>
      </div>
      <nav className='flex items-center space-x-6'>
        <Link to='/products' className='hover:text-gray-300 transition duration-300'>
          Plants
        </Link>
        <Link to='/about' className='hover:text-gray-300 transition duration-300'>
          About Us
        </Link>
        <Link to='/contact' className='hover:text-gray-300 transition duration-300'>
          Contact
        </Link>
      </nav>
      <Link to='/cart' className='flex items-center space-x-2 hover:text-gray-300 transition duration-300'>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9M9 5h6m-6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z'
          ></path>
        </svg>
        <span>Cart ({totalQuantity})</span> {/* Display total quantity */}
      </Link>
    </header>
  );
};

export default Header;