import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type {
	User,
	UserForLoga,
	UserWithoutIdwithPassword,
} from './types/userTypes'
import AuthApi from './api/userApi'

type StateAuth = {
	user: User | undefined
	accessToken: string | undefined
	error: string | undefined
	loading: boolean
}

const initialState: StateAuth = {
	user: undefined,
	accessToken: undefined,
	error: undefined,
	loading: true,
}

export const registrationThunk = createAsyncThunk(
	'registration/user',
	(body: UserWithoutIdwithPassword) => AuthApi.registration(body)
)

export const authorizationThunk = createAsyncThunk(
	'authorization/user',
	(body: UserForLoga) => AuthApi.authorization(body)
)

export const refreshUser = createAsyncThunk('refreshTokens/user', () =>
	AuthApi.refreshUser()
)

export const logoutThunk = createAsyncThunk('logout/user', () =>
	AuthApi.logout()
)

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(registrationThunk.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.accessToken = action.payload.accessToken
				state.loading = false
				state.error = undefined
			})
			.addCase(registrationThunk.pending, state => {
				state.loading = true
				state.error = undefined
			})
			.addCase(registrationThunk.rejected, (state, action) => {
				state.error = action.error.message
				state.loading = false
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.accessToken = action.payload.accessToken
				state.loading = false
			})
			.addCase(refreshUser.pending, state => {
				state.loading = true
			})
			.addCase(refreshUser.rejected, (state, action) => {
				state.error = action.error.message
				state.loading = false
			})
			.addCase(authorizationThunk.fulfilled, (state, action) => {
				state.error = undefined
				state.user = action.payload.user
				state.accessToken = action.payload.accessToken
				state.loading = false
			})
			.addCase(authorizationThunk.pending, state => {
				state.error = undefined
				state.loading = true
			})
			.addCase(authorizationThunk.rejected, (state, action) => {
				state.error = action.error.message
				state.loading = false
			})
			.addCase(logoutThunk.fulfilled, state => {
				state.user = undefined
				state.accessToken = undefined
				state.loading = false
				state.error = undefined
			})
			.addCase(logoutThunk.pending, state => {
				state.loading = true
			})
			.addCase(logoutThunk.rejected, (state, action) => {
				state.error = action.error.message
				state.loading = false
			})
	},
})

export default authSlice
