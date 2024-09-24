import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center relative'>
      <img
        src='https://images.pexels.com/photos/5512096/pexels-photo-5512096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='background'
        className='absolute inset-0 w-full h-full object-cover opacity-90 blur-sm'
      />
      <div className='text-center flex z-10 items-center justify-between flex-row'>
        <div className='flex flex-col '>
          <h1 className='text-4xl font-bold text-white'>Paradise Nursery</h1>
          <div className="bg-green-500 underline"></div>
          <p className='text-white mt-4'>Where Green Meets Serenity</p>
          <Link to='/products'>
            <button className='mt-6 px-6 py-3 bg-green-500 text-white rounded-lg'>
              Get Started
            </button>
          </Link>
        </div>

        <div className='flex flex-col text-white '>
          Welcome to the Paradise Nursery!
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
