import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ChatId, IChat } from './types/chatTypes'
import ChatApi from './api/chatApi'
import { Socket } from 'socket.io-client'
import { ShelterId } from '../shelters/type/shelterTypes'

interface StateCurrentPets {
	chats: IChat[]
	chat: IChat | undefined
	error: string | undefined
	loading: boolean
}

const initialState: StateCurrentPets = {
	chats: [],
	chat: undefined,
	error: undefined,
	loading: true,
}

export const loadAllChatsThunk = createAsyncThunk('load/chats', () =>
	ChatApi.getAllChats()
)
export const loadChatByIdThunk = createAsyncThunk(
	'loadById/chat',
	(id: ChatId) => ChatApi.getChatById(id)
)
export const createNewChatThunk = createAsyncThunk(
	'create/chat',
	(body: { shelterId: ShelterId; petName: string }) =>
		ChatApi.createChat(body)
)

const ChatSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		getChat(state, action) {
			state.chat = state.chats.find(chat => chat.id === action.payload)
		},
		refreshChat(state, action) {
			state.chat = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(loadAllChatsThunk.fulfilled, (state, action) => {
				state.chats = action.payload
				state.loading = false
			})
			.addCase(loadAllChatsThunk.pending, state => {
				state.loading = true
			})
			.addCase(loadAllChatsThunk.rejected, (state, action) => {
				state.error = action.error.message
				state.loading = false
			})
			.addCase(loadChatByIdThunk.fulfilled, (state, action) => {
				state.chat = action.payload
				state.loading = false
			})
			.addCase(loadChatByIdThunk.pending, state => {
				state.loading = true
			})
			.addCase(loadChatByIdThunk.rejected, (state, action) => {
				state.error = action.error.message
				state.loading = false
			})
			.addCase(createNewChatThunk.fulfilled, (state, action) => {
				state.chats.push(action.payload)
				state.chat = action.payload
				state.loading = false
			})
			.addCase(createNewChatThunk.pending, state => {
				state.loading = true
			})
			.addCase(createNewChatThunk.rejected, (state, action) => {
				state.error = action.error.message
				state.loading = false
			})
	},
})
export const { getChat, refreshChat } = ChatSlice.actions
export default ChatSlice
