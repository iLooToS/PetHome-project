import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Shelter } from "./type/shelterTypes";
import ShelterApi from "./api/ShelterApi";

type StateCurrentShelter = {
  currentShelter: Shelter | undefined;
  error: string | undefined;
  loading: boolean;
};

const initialState: StateCurrentShelter = {
  currentShelter: undefined,
  error: undefined,
  loading: true,
};

export const getShelterByIdthunk = createAsyncThunk(
  "load/shelterById",
  (id: Shelter["id"]) => ShelterApi.getShelterById(id)
);

const currentShelter = createSlice({
  name: "currentShelter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getShelterByIdthunk.fulfilled, (state, action) => {
        state.currentShelter = action.payload.shelter;
        state.loading = false;
        state.error = undefined;
      })
      .addCase(getShelterByIdthunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getShelterByIdthunk.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export default currentShelter;
