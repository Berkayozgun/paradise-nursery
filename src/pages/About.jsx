import React from "react";

const About = () => {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10'>
      <h1 className='text-4xl font-semibold mb-6 text-center'>About Us</h1>
      <p className='text-lg text-gray-700 mb-4'>
        Welcome to Paradise Nursery, where we believe in the power of nature to
        bring peace and tranquility to your life. Our mission is to provide
        high-quality plants and gardening supplies to help you create your own
        green oasis.
      </p>
      <p className='text-lg text-gray-700 mb-4'>
        Founded in 2021, Paradise Nursery has quickly become a trusted name in
        the gardening community. Our team of experts is passionate about plants
        and dedicated to helping you succeed in your gardening endeavors.
      </p>
      <p className='text-lg text-gray-700 mb-4'>
        Whether you're a seasoned gardener or just starting out, we have
        everything you need to make your garden thrive. From a wide variety of
        plants to top-notch gardening tools, we are your one-stop shop for all
        things green.
      </p>

      <div className='mt-10'>
        <h2 className='text-2xl font-semibold mb-4'>Our Values</h2>
        <ul className='list-disc list-inside text-lg text-gray-700'>
          <li>Quality: We provide only the best plants and products.</li>
          <li>Customer Service: Your satisfaction is our top priority.</li>
          <li>
            Community: We believe in building a strong gardening community.
          </li>
          <li>
            Sustainability: We are committed to environmentally friendly
            practices.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
