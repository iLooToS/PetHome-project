"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPet, IPetCreate, PetId } from "./types/PetsTypes";
import PetsApi from "./api/petsApi";

type StateCurrentPets = {
  pets: IPet[];
  filterPets: IPet[];
  pet: IPet | undefined;
  error: string | undefined;
  loading: boolean;
};

export type UpdatePet = {
  id: PetId;
  body: IPetCreate;
};

const initialState: StateCurrentPets = {
  pets: [],
  filterPets: [],
  pet: undefined,
  error: undefined,
  loading: true,
};

export const loadAllPetsThunk = createAsyncThunk("load/pets", () =>
  PetsApi.getAllPets()
);
export const loadPetsByIdThunk = createAsyncThunk(
  "loadById/pets",
  (id: PetId) => PetsApi.getPetsById(id)
);
export const createPetsThunk = createAsyncThunk(
  "create/pets",
  (body: FormData) => PetsApi.createPet(body)
);

export const updatePetThunk = createAsyncThunk(
  "update/pets",
  ({ id, body }: UpdatePet) => PetsApi.updatePet(id, body)
);

export const deletePetThunk = createAsyncThunk("delete/pets", (id: PetId) =>
  PetsApi.deletePet(id)
);

const PetSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    returnFilterPets(state) {
      state.filterPets = state.pets;
    },
    filterPets(state, action) {
      state.filterPets = state.pets.filter((pet) => {
        for (const [key, value] of Object.entries(action.payload)) {
          if (typeof value === "string" && value !== "") {
            switch (key) {
              case "petType":
                if (pet.petType !== value) return false;
                break;
              case "petSize":
                if (pet.petSize !== value) return false;
                break;
              case "city":
                if (pet.Shelter.Location?.city !== value) return false;
                break;
              case "isSex":
                if (pet.isSex.toString() !== value) return false;
                break;
              case "isChipping":
                if (pet.isChipping.toString() !== value) return false;
                break;
              case "isTemperament":
                if (pet.isTemperament.toString() !== value) return false;
                break;
              case "isCastration":
                if (pet.isCastration.toString() !== value) return false;
                break;
              case "isPassport":
                if (pet.isPassport.toString() !== value) return false;
                break;
              case "isVaccination":
                if (pet.isVaccination.toString() !== value) return false;
                break;
              default:
                break;
            }
          }
        }
        return true;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllPetsThunk.fulfilled, (state, action) => {
        state.pets = action.payload;
        state.filterPets = action.payload;
        state.loading = false;
      })
      .addCase(loadAllPetsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadAllPetsThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(loadPetsByIdThunk.fulfilled, (state, action) => {
        state.pet = action.payload;
        state.loading = false;
      })
      .addCase(loadPetsByIdThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadPetsByIdThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createPetsThunk.fulfilled, (state, action) => {
        state.pets.push(action.payload);
        state.loading = false;
      })
      .addCase(deletePetThunk.fulfilled, (state, action) => {
        state.pets = state.pets.filter((pet) => pet.id !== +action.payload);
        state.loading = false;
      })
      .addCase(deletePetThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePetThunk.fulfilled, (state, action) => {
        state.pets = state.pets.map((pet) =>
          pet.id === action.payload.id ? action.payload : pet
        );
        state.pet = action.payload;
        state.loading = false;
      })
      .addCase(updatePetThunk.pending, (state) => {
        state.loading = true;
      });
  },
});
export const { returnFilterPets, filterPets } = PetSlice.actions;
export default PetSlice;

