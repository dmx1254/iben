import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  products: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
  },
});

export const { addProducts } = productsSlice.actions;

export default productsSlice.reducer;
