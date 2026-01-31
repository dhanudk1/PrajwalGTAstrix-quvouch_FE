import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import App from "./App";
import { store } from "./app/Store";
import { Provider } from "react-redux"; 
import "./index.css";

axios.defaults.withCredentials = true;


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
 
<Provider store={store}>
  <App />
</Provider>
    </BrowserRouter>
  </React.StrictMode>
);
