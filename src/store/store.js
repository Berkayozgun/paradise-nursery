import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

const rootReducer = {
  cart: cartReducer,
  // Add other reducers here
};

export const store = configureStore({
  reducer: rootReducer,
});
