import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import App from "./App";
<<<<<<< HEAD
import { store } from "./app/Store";
import { Provider } from "react-redux"; 
=======
import { Provider } from "react-redux";
>>>>>>> 6d02c332d7be547eb3c411fc69b359905455bae7
import "./index.css";
import { store } from "./store/store";
import CookieProvider from "./CookieProvider";
import { injectStore } from "./utils/api";

injectStore(store);

axios.defaults.withCredentials = true;


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
 
<Provider store={store}>
  <App />
</Provider>
    </BrowserRouter>
  </React.StrictMode>
=======
    <Provider store={store}>
      <BrowserRouter>
        <CookieProvider>
          <App />
        </CookieProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
>>>>>>> 6d02c332d7be547eb3c411fc69b359905455bae7
);
