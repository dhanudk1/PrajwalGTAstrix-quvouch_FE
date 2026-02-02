import { configureStore } from "@reduxjs/toolkit";
import businessReducer from "../features/business/businessSlice";

export const store = configureStore({
  reducer: {
    business: businessReducer,
  },
});
