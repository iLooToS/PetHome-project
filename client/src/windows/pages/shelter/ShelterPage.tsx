"use client";
import ShelterInfo from "@/src/windows/entities/shelters/ui/ShelterInfo";
import "./styles/ShelterPage.css";
import ShelterPosts from "@/src/windows/entities/shelters/ui/ShelterPosts";
import { useEffect } from "react";
import { RootState, useAppDispatch } from "@/src/windows/app/store/store";
import { getShelterByIdThunk } from "@/src/windows/entities/shelters/shelterSlice";
import {
  loadAllPostsThunk,
  loadPostByIdThunk,
} from "../../entities/shelters/shelterPosts/postSlice";
import { useSelector } from "react-redux";

interface ShelterPageProps {
  shelterId?: number;
}
// params из url надо перебрасывать в каждый компонент
const ShelterPage = ({ shelterId }: ShelterPageProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { posts } = useSelector((state: RootState) => state.posts);
  const shelterPosts = posts.filter((post) => post?.shelterId === shelterId);

  useEffect(() => {
    if (shelterId) {
      dispatch(loadAllPostsThunk());
      dispatch(getShelterByIdThunk(shelterId));
    }
  }, [shelterId, dispatch]);

  return (
    <div className="ShelterPage">
      <ShelterInfo />
      <ShelterPosts shelterPosts={shelterPosts} ShelterPostImages={[]} />
    </div>
  );
};

export default ShelterPage;
