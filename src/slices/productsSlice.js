import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";
const initialState = {
  products: [],
  categorisedProducts: [],
  cartProducts: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Ürünler getirilemedi");
    }
    return response.json();
  }
);

export const fetchCategorisedProducts = createAsyncThunk(
  "products/fetchCategorisedProducts",
  async (category) => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    if (!response.ok) {
      throw new Error("Ürünler getirilemedi");
    }
    return response.json();
  }
);

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {

    addToCartFromCookies: (state, action) => {
      // const { id } = action.payload || {};
      // if (id && !state.cartProducts.some((cart) => cart.id === id)) {
      //   state.cartProducts = [...state.cartProducts, { ...action.payload }];
      // }
      state.cartProducts = [...action.payload]

    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (cart) => cart.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.cartProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = [...action.payload.products];
    });
    builder.addCase(fetchCategorisedProducts.fulfilled, (state, action) => {
      state.categorisedProducts = [...action.payload.products];
    });
  },
});

export const { addToCartFromCookies, removeFromCart, resetCart } = productsSlice.actions;

export default productsSlice.reducer;
