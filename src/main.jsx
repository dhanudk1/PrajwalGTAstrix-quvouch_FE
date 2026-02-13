import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store/store";
import CookieProvider from "./CookieProvider";
import { injectStore } from "./utils/api";
import { jwtDecode } from "jwt-decode";

injectStore(store);

if (localStorage.getItem("accessToken")) {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));

  try {
    const user = jwtDecode(accessToken);
    store.dispatch({
      type: "auth/setAccessToken",
      payload: {
        user: { ...user, roles: user.authorities || [] }, // Adjust if your token uses a different field for roles
        accessToken,
      },
    });
  } catch (error) {
    localStorage.removeItem("accessToken");
    store.dispatch({
      type: "auth/clearAuth",
    });
  }
} else {
  store.dispatch({
    type: "auth/clearAuth",
  });
}

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
