import { AxiosResponse } from "axios";
import axiosInstance from "@/src/windows/app/services/axiosInstance";
import { Post, PostId } from "../types/postTypes";
import { PostComment, PostData } from "../../ui/ShelterPosts";

class PostsApi {
  static getAllPosts = async (): Promise<Post[]> => {
    try {
      const response: AxiosResponse<{ message: string; posts: Post[] }> =
        await axiosInstance.get("/posts");
      return response.data.posts;
    } catch (error) {
      throw new Error("Не получил все посты");
    }
  };

  static getPostById = async (id: PostId): Promise<Post> => {
    try {
      const result: AxiosResponse<{
        message: "success";
        post: Post;
      }> = await axiosInstance.get(`/posts/${id}`);
      console.log(result);

      return result.data.post;
    } catch (error) {
      throw new Error("Не получил пост по id");
    }
  };
  static createPost = async (body: FormData): Promise<Post> => {
    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const result: AxiosResponse<{
        message: "success";
        post: Post;
      }> = await axiosInstance.post(`/posts`, body, config);
      return result.data.post;
    } catch (error) {
      throw new Error("Не получил пост по id");
    }
  };
  static deletePost = async (id: PostId): Promise<PostId> => {
    try {
      const { data }: AxiosResponse<{ message: "success" }> =
        await axiosInstance.delete(`/posts/${id}`);
      if (data.message === "success") {
        return id;
      }
      return data.message;
    } catch (error) {
      throw new Error("Не удалил пост");
    }
  };

  static createPostComment = async (body: PostData): Promise<PostComment> => {
    try {
      const result: AxiosResponse<{ message: string; shelterPostComment: PostComment }> =
        await axiosInstance.post(`/comments`, body);
      return result.data.shelterPostComment;
    } catch (error) {
      throw new Error("Не получил коментарий");
    }
  };
}

export default PostsApi;
