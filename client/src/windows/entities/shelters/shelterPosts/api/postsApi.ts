import { AxiosResponse } from "axios";
import axiosInstance from "@/src/windows/app/services/axiosInstance";
import { Post, PostId } from "../types/postTypes";

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
      console.log(result);
      
      return result.data.post;
    } catch (error) {
      throw new Error("Не получил пост по id");
    }
  };
}

export default PostsApi;
