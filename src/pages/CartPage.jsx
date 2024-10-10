import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const totalQuantity = useSelector((state) => state.cart.totalQuantity) || 0;
  const totalPrice = useSelector((state) => state.cart.totalPrice) || 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Your Shopping Cart</h2>
      <div className='bg-white shadow-md rounded-lg p-4'>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item?.id}
              className='flex items-center justify-between p-4 mb-4 border-b last:border-b-0'
            >
              <div className='flex items-center space-x-4'>
                <img
                  src={item?.image}
                  alt={item?.name}
                  className='w-20 h-20 object-cover rounded'
                />
                <div>
                  <p className='text-lg font-semibold'>{item?.name}</p>
                  <p className='text-gray-500'>${item?.price?.toFixed(2)}</p>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <button
                  onClick={() => dispatch(decrementQuantity(item))}
                  className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'
                >
                  -
                </button>
                <span className='font-semibold'>{item?.quantity}</span>
                <button
                  onClick={() => dispatch(incrementQuantity(item))}
                  className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item))}
                className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500'>Your cart is empty.</p>
        )}
      </div>
      <div className='mt-6 text-right'>
        <h3 className='text-lg font-semibold'>Total Items: {totalQuantity}</h3>
        <h3 className='text-xl font-bold'>
          Total Price: ${totalPrice.toFixed(2)}
        </h3>
      </div>

      <div className='mt-6'>
        <button
          onClick={() => navigate('/checkout')}
          className='w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Checkout
        </button>
      </div>

      {/* Continue Shopping Button */}
      <div className='mt-4'>
        <Link
          to='/products'
          className='w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 text-center block'
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
