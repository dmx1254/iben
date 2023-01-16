import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  ordersProducts: null,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getAllOrders: (state, action) => {
      state.ordersProducts = action.payload;
      state.loading = false;
    },
    addOrders: (state, action) => {
      state.ordersProducts.push(action.payload);
    },
  },
});

export const { getAllOrders, addOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
