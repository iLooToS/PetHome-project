import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IPet, IPetCreate, PetId } from './types/PetsTypes'
import PetsApi from './api/petsApi'

type StateCurrentPets = {
	pets: IPet[]
	pet: IPet | undefined
	error: string | undefined
	loading: boolean
}

export type UpdatePet = {
	id: PetId
	body: IPetCreate
}

const initialState: StateCurrentPets = {
	pets: [],
	pet: undefined,
	error: undefined,
	loading: true,
}

export const loadAllPetsThunk = createAsyncThunk('load/pets', () =>
	PetsApi.getAllPets()
)
export const loadPetsByIdThunk = createAsyncThunk(
	'loadById/pets',
	(id: PetId) => PetsApi.getPetsById(id)
)
export const createPetsThunk = createAsyncThunk(
	'create/pets',
	(body: FormData) => PetsApi.createPet(body)
)

export const updatePetThunk = createAsyncThunk(
	'update/pets',
	({ id, body }: UpdatePet) => PetsApi.updatePet(id, body)
)

export const deletePetThunk = createAsyncThunk('delete/pets', (id: PetId) =>
	PetsApi.deletePet(id)
)

const PetSlice = createSlice({
	name: 'pets',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(loadAllPetsThunk.fulfilled, (state, action) => {
				state.pets = action.payload
				state.loading = false
			})
			.addCase(loadAllPetsThunk.pending, state => {
				state.loading = true
			})
			.addCase(loadAllPetsThunk.rejected, (state, action) => {
				state.error = action.error.message
				state.loading = false
			})
			.addCase(loadPetsByIdThunk.fulfilled, (state, action) => {
				state.pet = action.payload
				state.loading = false
			})
			.addCase(loadPetsByIdThunk.pending, state => {
				state.loading = true
			})
			.addCase(loadPetsByIdThunk.rejected, (state, action) => {
				state.error = action.error.message
				state.loading = false
			})
			.addCase(createPetsThunk.fulfilled, (state, action) => {
				state.pets.push(action.payload)
				state.loading = false
			})
			.addCase(deletePetThunk.fulfilled, (state, action) => {
				state.pets = state.pets.filter(pet => pet.id !== +action.payload)
				state.loading = false
			})
			.addCase(deletePetThunk.pending, state => {
				state.loading = true
			})
			.addCase(updatePetThunk.fulfilled, (state, action) => {
				state.pets = state.pets.map(pet =>
					pet.id === action.payload.id ? action.payload : pet
				)
				state.pet = action.payload
				state.loading = false
			})
			.addCase(updatePetThunk.pending, state => {
				state.loading = true
			})
	},
})

export default PetSlice
