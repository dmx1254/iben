import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "anglais",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    addNewLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { addNewLanguage } = languageSlice.actions;

export default languageSlice.reducer;
