import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload.product);
      state.totalPrice +=
        action.payload.product.amount * action.payload.product.price;
    },

    deleteProductToCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.server !== action.payload.id
      );
      state.quantity -= 1;
      state.totalPrice -= action.payload.amount * action.payload.price;
    },

    inialiseTheCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.totalPrice = 0;
    },

    addToCharacterList: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.productId === action.payload.id) {
          return {
            ...product,
            character: action.payload.character,
          };
        } else {
          return product;
        }
      });
    },
  },
});

export const {
  addProductToCart,
  deleteProductToCart,
  inialiseTheCart,
  addToCharacterList,
} = cartSlice.actions;

export default cartSlice.reducer;
