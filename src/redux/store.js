import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer, 
    product: productSlice.reducer
  }
})

export default store