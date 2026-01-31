import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store/store";
import CookieProvider from "./CookieProvider";
import { injectStore } from "./utils/api";

injectStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CookieProvider>
          <App />
        </CookieProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
