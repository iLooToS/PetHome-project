import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, PostCreate, PostId } from "./types/postTypes";
import PostsApi from "./api/postsApi";
import { PostComment, PostData } from "../ui/ShelterPosts";

type StateCurrentPosts = {
  posts: Post[];
  post: Post | undefined;
  error: string | undefined;
  loading: boolean;
};

export type UpdatePet = {
  id: PostId;
  body: PostCreate;
};

const initialState: StateCurrentPosts = {
  posts: [],
  post: undefined,
  error: undefined,
  loading: true,
};

export const loadAllPostsThunk = createAsyncThunk("load/posts", () =>
  PostsApi.getAllPosts()
);

export const deletePostThunk = createAsyncThunk("delete/posts", (id: PostId) =>
  PostsApi.deletePost(id)
);

export const loadPostByIdThunk = createAsyncThunk(
  "loadById/post",
  (id: PostId) => PostsApi.getPostById(id)
);

export const createPostThunk = createAsyncThunk(
  "create/posts",
  (body: FormData) => PostsApi.createPost(body)
);

export const createPostCommentThunk = createAsyncThunk(
  "create/post/comment",
  (body: PostData) => PostsApi.createPostComment(body)
);

const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAllPostsThunk.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(loadAllPostsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadAllPostsThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(loadPostByIdThunk.fulfilled, (state, action) => {
        state.post = action.payload;
        state.loading = false;
      })
      .addCase(loadPostByIdThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadPostByIdThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createPostThunk.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.loading = false;
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== +action.payload);
        state.loading = false;
      })
      .addCase(deletePostThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPostCommentThunk.fulfilled, (state, action) => {
        console.log(action);
        const post = state.posts.find(
          (post) => post.id === action.payload.shelterPostId
        );
        if (post) {
          post.ShelterPostComments.push(action.payload);
        }
        state.loading = false;
      });
  },
});

export default PostSlice;
