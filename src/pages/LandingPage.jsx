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
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='flex p-20 z-10 items-center justify-around flex-col md:flex-row'>
        <div className='flex flex-col items-center w-full md:w-3/12 gap-4'>
          <h1 className='text-4xl font-bold text-white text-center'>
            Welcome to
          </h1>
          <h1 className='text-4xl font-bold text-white text-center'>
            Paradise Nursery
          </h1>
          <div className='bg-green-500 underline'></div>
          <p className='text-white mt-4 text-center'>
            Where Green Meets Serenity
          </p>
          <Link to='/products'>
            <button className='mt-6 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'>
              Get Started
            </button>
          </Link>
        </div>

        <div className='flex flex-col text-white w-full md:w-6/12 mt-8 md:mt-0'>
          <div className='bg-black bg-opacity-50 p-4 rounded-3xl'>
            <center>
              Welcome to the Paradise Nursery, where green meets serenity!
            </center>
            <br /> At Paradise Nursery, we are passionate about bringing nature
            closer to you. Our mission is to provide a wide range of
            high-quality plants that not only enhance the beauty of your
            surroundings but also contribute to a healthier and more sustainable
            lifestyle. From air-purifying plants to aromatic fragrant ones, we
            have something for every plant enthusiast.
            <br />
            <br /> Our team of experts is dedicated to ensuring that each plant
            meets our strict standards of quality and care. Whether you&apos;re
            a seasoned gardener or just starting your green journey, we&apos;re
            here to support you every step of the way. Feel free to explore our
            collection, ask questions, and let us help you find the perfect
            plant for your home or office.
            <br />
            <br /> Join us in our mission to create a greener, healthier world.
            Visit Paradise Nursery today and experience the beauty of nature
            right at your doorstep.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
