import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "euro",
  currencyValue: 1,
};

export const currencyExchangeSlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    addNewCurrencyExchange: (state, action) => {
      state.currency = action.payload;
    },

    addCurrencyVal: (state, action) => {
      state.currencyValue = action.payload;
    },
  },
});

export const { addNewCurrencyExchange, addCurrencyVal } =
  currencyExchangeSlice.actions;

export default currencyExchangeSlice.reducer;
