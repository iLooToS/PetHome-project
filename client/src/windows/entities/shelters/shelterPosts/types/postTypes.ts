import { PostComment } from "../../ui/ShelterPosts";

export interface Post {
  ShelterPostComments?: PostComment[];
  id: number;
  shelterId: number;
  postName: string;
  text: string;
  createdAt: string;
  ShelterPostImages?: IPostImage[];
}

export type PostId = Post["id"];

export interface IPostImage {
  id: number;
  shelterPostId: number;
  url: string;
}

export interface PostCreate {
  [key: string]: any;
  postName: string;
  text: string;
  photo?: File | null;
}
