import { createSlice } from "@reduxjs/toolkit";

export const pricesSlice = createSlice({
  name: "prices",
  initialState: {
    value: [],
  },
  reducers: {
    setPrices: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPrices } = pricesSlice.actions;

export default pricesSlice.reducer;
