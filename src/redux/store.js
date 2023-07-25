import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import testReducer from "./testSlice/testSlice";
import userReducer from "./userSlice/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedTestReducer = persistReducer(persistConfig, testReducer);
const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    test: persistedTestReducer,
    user: persistedUserReducer,
  },
});

export const persistor = persistStore(store);
