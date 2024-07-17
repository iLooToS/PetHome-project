import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Location } from "./location/types/locationTypes";
import { Shelter, ShelterCreateWithLocation } from "./type/shelterTypes";
import ShelterApi from "./api/ShelterApi";

interface StateCurrentShelter {
  shelters: Shelter[];
  currentShelter: Shelter | undefined;
  locationShelter: Location | undefined;
  error: string | undefined;
  loading: boolean;
}

const initialState: StateCurrentShelter = {
  shelters: [],
  currentShelter: undefined,
  locationShelter: undefined,
  error: undefined,
  loading: false,
};

export const getAllSheltersThunk = createAsyncThunk("load/allShelters", () =>
  ShelterApi.getAllShelter()
);

export const createShelterThunk = createAsyncThunk(
  "create/shelter",
  (body: FormData) => ShelterApi.createShelter(body)
);

export const getShelterByIdThunk = createAsyncThunk(
  "load/shelterById",
  (id: Shelter["id"]) => ShelterApi.getShelterById(id)
);

export const confirmShelterThunk = createAsyncThunk(
  "confirm/shelter",
  (id: Shelter["id"]) => ShelterApi.confirmShelter(id)
);

export const deleteShelterThunk = createAsyncThunk(
  "delete/shelter",
  (id: number) => ShelterApi.deleteShelter(id)
);

const ShelterSlice = createSlice({
  name: "shelters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createShelterThunk.fulfilled, (state, action) => {
        console.log(action.payload);
        
        state.shelters.push(action.payload);

        state.shelters = state.shelters.map((shelter) =>
          shelter?.id === action.payload?.id ? action.payload : shelter
        );
        state.loading = false;
      })
      .addCase(createShelterThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createShelterThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getShelterByIdThunk.fulfilled, (state, action) => {
        state.currentShelter = action.payload.shelter;
        state.loading = false;
        state.error = undefined;
      })
      .addCase(getShelterByIdThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getShelterByIdThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllSheltersThunk.fulfilled, (state, action) => {
        state.shelters = action.payload.shelters;
        state.loading = false;
        state.error = undefined;
      })
      .addCase(getAllSheltersThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getAllSheltersThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteShelterThunk.fulfilled, (state, action) => {
        state.shelters = state.shelters.filter(
          (shelter) => shelter.id !== action.payload?.id
        );
        state.loading = false;
      })
      .addCase(deleteShelterThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteShelterThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(confirmShelterThunk.fulfilled, (state, action) => {
        state.shelters = state.shelters.map((shelter) =>
          shelter.id === action.payload?.id ? action.payload : shelter
        );
        state.loading = false;
      })
  },
});
export default ShelterSlice;
