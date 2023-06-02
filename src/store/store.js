import categoryReducer from "@/slices/categorySlice";
import productsReducer from "@/slices/productsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productsReducer,
  },
});

export default store;
