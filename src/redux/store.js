import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./testSlice/testSlice";
import userReducer from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
    user: userReducer,
  },
});
