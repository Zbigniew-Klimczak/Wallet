import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store.js";
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/Wallet/">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
