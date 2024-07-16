import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Post, PostCreate, PostId } from './types/postTypes'
import PostsApi from './api/postsApi'

type StateCurrentPosts = {
	posts: Post[]
	post: Post | undefined
	error: string | undefined
	loading: boolean
}

export type UpdatePet = {
	id: PostId
	body: PostCreate
}

const initialState: StateCurrentPosts = {
	posts: [],
	post: undefined,
	error: undefined,
	loading: true,
}

export const loadAllPostsThunk = createAsyncThunk('load/posts', () =>
	PostsApi.getAllPosts()
)

export const loadPostByIdThunk = createAsyncThunk(
	'loadById/post',
	(id: PostId) => PostsApi.getPostById(id)
)

export const createPostThunk = createAsyncThunk(
	'create/posts',
	(body: FormData) => PostsApi.createPost(body)
)

const PostSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(loadAllPostsThunk.fulfilled, (state, action) => {
				state.posts = action.payload
				state.loading = false
			})
			.addCase(loadAllPostsThunk.pending, state => {
				state.loading = true
			})
			.addCase(loadAllPostsThunk.rejected, (state, action) => {
				state.error = action.error.message
				state.loading = false
			})
			.addCase(loadPostByIdThunk.fulfilled, (state, action) => {
				state.post = action.payload
				state.loading = false
			})
			.addCase(loadPostByIdThunk.pending, state => {
				state.loading = true
			})
			.addCase(loadPostByIdThunk.rejected, (state, action) => {
				state.error = action.error.message
				state.loading = false
			})
			.addCase(createPostThunk.fulfilled, (state, action) => {
                console.log(action);
                
                
				state.posts.push(action.payload)
				state.loading = false
			})
	},
})

export default PostSlice;