import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createShelter = createAsyncThunk(
  "shelter/createShelter",
  async ({ updatedShelterData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createShelter(updatedShelterData);
      toast.success("Barınak Başarıyla Oluşturuldu.");
      navigate("/admin_dashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getShelters = createAsyncThunk(
  "shelter/getShelters",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getShelters();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getShelter = createAsyncThunk(
  "shelter/getShelter",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getShelter(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteShelter = createAsyncThunk(
  "shelter/deleteShelter",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteShelter(id);
      toast.success("Shelter Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateShelter = createAsyncThunk(
  "shelter/updateShelter",
  async ({ id, updatedShelterData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updateShelter(updatedShelterData, id);
      toast.success("Shelter Updated Successfully");
      navigate("/shelter_list");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const shelterSlice = createSlice({
  name: "shelter",
  initialState: {
    shelter: {},
    shelters: [],
    userShelters: [],
    error: "",
    loading: false,
  },

  extraReducers: {
    [createShelter.pending]: (state, action) => {
      state.loading = true;
    },
    [createShelter.fulfilled]: (state, action) => {
      state.loading = false;
      state.shelters = [action.payload];
    },
    [createShelter.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [getShelters.pending]: (state, action) => {
      state.loading = true;
    },
    [getShelters.fulfilled]: (state, action) => {
      state.loading = false;
      state.shelters = action.payload;
    },
    [getShelters.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [getShelter.pending]: (state, action) => {
      state.loading = true;
    },
    [getShelter.fulfilled]: (state, action) => {
      state.loading = false;
      state.shelter = action.payload;
    },
    [getShelter.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [deleteShelter.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteShelter.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("action", action);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.shelters = state.shelters.filter((item) => item._id !== id);
        state.shelters = state.shelters.filter((item) => item._id !== id);
      }
    },
    [deleteShelter.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [updateShelter.pending]: (state, action) => {
      state.loading = true;
    },
    [updateShelter.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("action", action);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.shelters = state.shelters.map((item) =>
          item._id === id ? action.payload : item
        );
        state.shelters = state.shelters.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updateShelter.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default shelterSlice.reducer;
