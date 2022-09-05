import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "@fontsource/poppins";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { store } from "./app/store/store";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
