import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import paymentSlice from "./slices/paymentSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    product: productSlice.reducer,
    payment: paymentSlice.reducer
  }   
})

export default store