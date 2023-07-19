import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
      console.log(action);
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = testSlice.actions;

export default testSlice.reducer;
