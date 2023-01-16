import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cook: true,
};

export const cookSlice = createSlice({
  name: "cook",
  initialState,
  reducers: {
    addNewCookState: (state, action) => {
      state.cook = action.payload;
    },
  },
});

export const { addNewCookState } = cookSlice.actions;

export default cookSlice.reducer;
