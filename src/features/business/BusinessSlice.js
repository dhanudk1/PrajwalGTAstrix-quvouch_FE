import { createSlice } from "@reduxjs/toolkit";
import {
  fetchBusinesses,
  createBusiness,
  updateBusiness,
  deleteBusiness,
} from "./BusinessThunk";

const businessSlice = createSlice({
  name: "business",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchBusinesses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBusinesses.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchBusinesses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // CREATE
      .addCase(createBusiness.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      // UPDATE
      .addCase(updateBusiness.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (b) => b.id === action.payload.id
        );
        if (index !== -1) state.list[index] = action.payload;
      })

      // DELETE
      .addCase(deleteBusiness.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (b) => b.id !== action.payload
        );
      });
  },
});

export default businessSlice.reducer;
