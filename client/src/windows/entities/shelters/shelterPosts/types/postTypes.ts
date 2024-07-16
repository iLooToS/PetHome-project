export interface Post {
  id: number;
  shelterId: number;
  postName: string;
  text: string;
  ShelterPostImages: IPetImage[]
}

export type PostId = Post["id"];

export interface IPetImage {
	id: number
	shelterPostId: number
	url: string
}

export interface PostCreate {
  [key: string]: any;
  postName: string;
  text: string;
  photo?: File | null;
}
