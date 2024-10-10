import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

// Combine all reducers
const rootReducer = {
  cart: cartReducer,
  // Add other reducers here
};

// Configure the Redux store
export const store = configureStore({
  reducer: rootReducer,
});
