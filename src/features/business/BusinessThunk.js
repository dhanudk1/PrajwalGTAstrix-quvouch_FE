import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBusinessesApi,
  createBusinessApi,
  updateBusinessApi,
  deleteBusinessApi,
} from "./businessService";

// 🔹 Fetch all businesses
export const fetchBusinesses = createAsyncThunk(
  "business/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await getBusinessesApi();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// 🔹 Create
export const createBusiness = createAsyncThunk(
  "business/create",
  async (data, thunkAPI) => {
    try {
      return await createBusinessApi(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// 🔹 Update
export const updateBusiness = createAsyncThunk(
  "business/update",
  async ({ id, data }, thunkAPI) => {
    try {
      return await updateBusinessApi({ id, data });
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// 🔹 Delete
export const deleteBusiness = createAsyncThunk(
  "business/delete",
  async (id, thunkAPI) => {
    try {
      return await deleteBusinessApi(id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
