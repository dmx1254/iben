import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "",
  orderId: "",
  productId: "",
};

export const orderIdSlice = createSlice({
  name: "orderId",
  initialState,
  reducers: {
    addNewOrderId: (state, action) => {
      state.orderId = action.payload.id;
      state.page = action.payload.page;
      state.productId = action.payload.productId;
    },
    rmIpAdress: (state, action) => {
      state.orderId = "";
      state.page = "";
      state.productId = "";
    },
  },
});

export const { addNewOrderId, rmIpAdress } = orderIdSlice.actions;

export default orderIdSlice.reducer;
