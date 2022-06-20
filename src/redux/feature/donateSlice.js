import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createDonate = createAsyncThunk(
  "donate/createDonate",
  async ({ updatedDonateData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createDonate(updatedDonateData);
      toast.success("Bağış Başarıyla Yapıldı.");
      navigate("/bagis_tamamla");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getDonates = createAsyncThunk(
  "donate/getDonates",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getDonates();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getDonate = createAsyncThunk(
  "donate/getDonate",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getDonate(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteDonate = createAsyncThunk(
  "donate/deleteDonate",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteDonate(id);
      toast.success("Donate Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const donateSlice = createSlice({
  name: "donate",
  initialState: {
    donate: {},
    donates: [],
    error: "",
    loading: false,
  },

  extraReducers: {
    [createDonate.pending]: (state, action) => {
      state.loading = true;
    },
    [createDonate.fulfilled]: (state, action) => {
      state.loading = false;
      state.donates = [action.payload];
    },
    [createDonate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [getDonates.pending]: (state, action) => {
      state.loading = true;
    },
    [getDonates.fulfilled]: (state, action) => {
      state.loading = false;
      state.donates = action.payload;
    },
    [getDonates.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [getDonate.pending]: (state, action) => {
      state.loading = true;
    },
    [getDonate.fulfilled]: (state, action) => {
      state.loading = false;
      state.donate = action.payload;
    },
    [getDonate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [deleteDonate.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteDonate.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("action", action);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.donates = state.donates.filter((item) => item._id !== id);
        state.donates = state.donates.filter((item) => item._id !== id);
      }
    },
    [deleteDonate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default donateSlice.reducer;
