import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productId: "",
  category: "",
  price: 0,
  status: "",
  server: "",
  amount: 0,
  qty: 0,
  character: "",
};

export const productsInfoSlice = createSlice({
  name: "productsinfo",
  initialState,
  reducers: {
    addProductsInfo: (state, action) => {
      state.productId = action.payload.productId;
      state.category = action.payload.category;
      state.price = action.payload.price;
      state.status = action.payload.status;
      state.server = action.payload.server;
      state.amount = action.payload.amount;
      state.qty = action.payload.qty;
      state.character = action.payload.character;
    },

    changeQuantity: (state, action) => {
      state.amount = action.payload;
    },

    addCharacterByPaymentpage: (state, action) => {
      state.character = action.payload.character;
    },
  },
});

export const { addProductsInfo, changeQuantity, addCharacterByPaymentpage } =
  productsInfoSlice.actions;

export default productsInfoSlice.reducer;
