import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = {};
    },
    updateUser: (state, action) => {
      state.user.person = action.payload;
    },
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
