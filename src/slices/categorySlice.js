import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  currentLayoutCount: 4,
  currentLayout: { xs: 12, sm: 6, lg: 4 },
};

export const fetchProductCategories = createAsyncThunk(
  "categories/fetchProductCategories",
  async () => {
    const response = await fetch(`https://dummyjson.com/products/categories`);
    if (!response.ok) {
      throw new Error("Kategoriler getirilemedi");
    }
    return response.json();
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCurrentLayoutCount: (state, action) => {
      state.currentLayoutCount = action.payload;
    },
    setCurrentLayout: (state, action) => {
      state.currentLayout = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductCategories.fulfilled, (state, action) => {
      state.categories = [...action.payload];
    });
  },
});
export const { setCurrentLayoutCount, setCurrentLayout } =
  categorySlice.actions;
export default categorySlice.reducer;
