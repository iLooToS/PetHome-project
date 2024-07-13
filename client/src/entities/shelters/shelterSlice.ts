import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Location } from './location/types/locationTypes'
import { Shelter, ShelterCreateWithLocation } from './type/shelterTypes'
import ShelterApi from './api/ShelterApi'

interface StateCurrentShelter {
	shelters: Shelter[]
	currentShelter: Shelter | undefined
	locationShelter: Location | undefined
	error: string | undefined
	loading: boolean
}

const initialState: StateCurrentShelter = {
	shelters: [],
	currentShelter: undefined,
	locationShelter: undefined,
	error: undefined,
	loading: false,
}

export const createShelterThunk = createAsyncThunk(
	'create/shelter',
	(body: ShelterCreateWithLocation) => ShelterApi.createShelter(body)
)

const ShelterSlice = createSlice({
	name: 'shelters',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(createShelterThunk.fulfilled, (state, action) => {
				state.shelters = state.shelters.map(shelter =>
					shelter.id === action.payload.id ? action.payload : shelter
				)
				state.loading = false
			})
			.addCase(createShelterThunk.pending, state => {
				state.loading = true
			})
			.addCase(createShelterThunk.rejected, (state, action) => {
				state.error = action.error.message
				state.loading = false
			})
	},
})
export default ShelterSlice.reducer