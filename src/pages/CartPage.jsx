import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

const CartPage = ({ cart, updateCart }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.thumbnail} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
          <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
        </div>
      ))}
      <h3>Total Items: {totalQuantity}</h3>
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default CartPage;
