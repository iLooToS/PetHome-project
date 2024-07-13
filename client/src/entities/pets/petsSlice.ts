import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IPet, PetId } from './types/PetsTypes'
import PetsApi from './api/petsApi'

type StateCurrentPets = {
	pets: IPet[],
	pet: IPet | undefined
	error: string | undefined
	loading: boolean
}

const initialState: StateCurrentPets = {
	pets: [],
	pet: undefined,
	error: undefined,
	loading: false,
}

export const loadAllPetsThunk = createAsyncThunk('load/pets', () =>
	PetsApi.getAllPets()
)
export const loadPetsByIdThunk = createAsyncThunk(
	'loadById/pets',
	(id: PetId) => PetsApi.getPetsById(id)
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
	},
})

export default PetSlice
