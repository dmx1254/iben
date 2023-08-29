import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ipAddr: "",
};

export const ipAddrSlice = createSlice({
  name: "ipAddr",
  initialState,
  reducers: {
    addNewIp: (state, action) => {
      state.ipAddr = action.payload;
    },
    rmIpAdress: (state, action) => {
      state.ipAddr = "";
    },
  },
});

export const { addNewIp, rmIpAdress } = ipAddrSlice.actions;

export default ipAddrSlice.reducer;
