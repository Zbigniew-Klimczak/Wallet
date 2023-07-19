import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./testSlice/testSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
});
