import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice'; // Sepet işlemleri için slice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
