import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createPet = createAsyncThunk(
  "pet/createPet",
  async ({ updatedPetData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createPet(updatedPetData);
      toast.success("Hayvan Başarıyla Oluşturuldu.");
      navigate("/admin_dashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPets = createAsyncThunk(
  "pet/getPets",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getPets();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPetsByShelter = createAsyncThunk(
  "pet/getPetsByShelter",
  async (name, { rejectWithValue }) => {
    try {
      const response = await api.getPetsByShelter(name);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const checkPetByPetId = createAsyncThunk(
  "pet/checkPetByPetId",
  async (petId, { rejectWithValue }) => {
    try {
      const response = await api.checkPetByPetId(petId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPet = createAsyncThunk(
  "pet/getPet",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getPet(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deletePet = createAsyncThunk(
  "pet/deletePet",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deletePet(id);
      toast.success("Pet Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updatePet = createAsyncThunk(
  "pet/updatePet",
  async ({ id, updatedPetData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updatePet(updatedPetData, id);
      toast.success("Pet Updated Successfully");
      navigate("/pet_list");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPetsByPagination = createAsyncThunk(
  "pet/getPetsByPagination",
  async ({ count, page, shelter }, { rejectWithValue }) => {
    try {
      const response = await api.getPetsByPagination(count, page, shelter);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const searchPets = createAsyncThunk(
  "pet/searchPets",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await api.getPetsBySearch(searchQuery);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const petSlice = createSlice({
  name: "pet",
  initialState: {
    pet: {},
    petsCount: 0,
    pets: [],
    userPets: [],
    error: "",
    loading: false,
  },
  reducers: {
    resetPet(state) {
      state.pet = {};
    },
  },
  extraReducers: {
    [createPet.pending]: (state, action) => {
      state.loading = true;
    },
    [createPet.fulfilled]: (state, action) => {
      state.loading = false;
      state.pets = [action.payload];
    },
    [createPet.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [getPets.pending]: (state, action) => {
      state.loading = true;
    },
    [getPets.fulfilled]: (state, action) => {
      state.loading = false;
      state.pets = action.payload;
    },
    [getPets.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [getPetsByPagination.pending]: (state, action) => {
      state.loading = true;
    },
    [getPetsByPagination.fulfilled]: (state, action) => {
      state.loading = false;
      state.pets = action.payload.pets;
      state.petsCount = action.payload.petsCount;
    },
    [getPetsByPagination.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [getPet.pending]: (state, action) => {
      state.loading = true;
    },
    [getPet.fulfilled]: (state, action) => {
      state.loading = false;
      state.pet = action.payload;
    },
    [getPet.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [getPetsByShelter.pending]: (state, action) => {
      state.loading = true;
    },
    [getPetsByShelter.fulfilled]: (state, action) => {
      state.loading = false;
      state.pets = action.payload;
    },
    [getPetsByShelter.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [checkPetByPetId.pending]: (state, action) => {
      state.loading = true;
    },
    [checkPetByPetId.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.length) {
        state.pet = action.payload[0];
      }
    },
    [checkPetByPetId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [deletePet.pending]: (state, action) => {
      state.loading = true;
    },
    [deletePet.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("action", action);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.pets = state.pets.filter((item) => item._id !== id);
        state.pets = state.pets.filter((item) => item._id !== id);
      }
    },
    [deletePet.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [updatePet.pending]: (state, action) => {
      state.loading = true;
    },
    [updatePet.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("action", action);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.pets = state.pets.map((item) =>
          item._id === id ? action.payload : item
        );
        state.pets = state.pets.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updatePet.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [searchPets.pending]: (state, action) => {
      state.loading = true;
    },
    [searchPets.fulfilled]: (state, action) => {
      state.loading = false;
      state.pets = action.payload;
    },
    [searchPets.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { resetPet } = petSlice.actions;

export default petSlice.reducer;
