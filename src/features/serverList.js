import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  servers: [],
};

export const serversSlice = createSlice({
  name: "servers",
  initialState,
  reducers: {
    addServers: (state, action) => {
      state.loading = false;
      state.servers = [...action.payload];
    },
    updatePrice: (state, action) => {
      state.servers = state.servers.map((server) => {
        return {
          ...server,
          serverPrice: server.serverPrice * action.payload,
        };
      });
    },
  },
});

export const { addServers, updatePrice } = serversSlice.actions;

export default serversSlice.reducer;
