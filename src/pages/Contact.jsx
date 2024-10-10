import React from "react";

const Contact = () => {
  return (
    <div className='max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10'>
      <h1 className='text-3xl font-semibold mb-6 text-center'>Contact Us</h1>
      <form>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 mb-2'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            required
            className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 mb-2'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            required
            className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block text-gray-700 mb-2'>Message:</label>
          <textarea
            id='message'
            name='message'
            required
            className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600'
          ></textarea>
        </div>
        <button
          type='submit'
          className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;