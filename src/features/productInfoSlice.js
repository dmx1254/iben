import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productId: "",
  category: "",
  price: 0,
  total: 0,
  status: "",
  server: "",
  cur: "",
  amount: 0,
  qty: 0,
  totalusd: 0,
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
      state.total = action.payload.total;
      state.status = action.payload.status;
      state.server = action.payload.server;
      state.cur = action.payload.cur;
      state.amount = action.payload.amount;
      state.qty = action.payload.qty;
      state.totalusd = action.payload.totalusd;

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
