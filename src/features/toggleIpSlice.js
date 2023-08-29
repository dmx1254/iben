import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleIp: false,
};

export const toggleIpSlice = createSlice({
  name: "toggleIp",
  initialState,
  reducers: {
    addToggleState: (state, action) => {
      state.toggleIp = action.payload;
    },
  },
});

export const { addToggleState } = toggleIpSlice.actions;
export default toggleIpSlice.reducer;
