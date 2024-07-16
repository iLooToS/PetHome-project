"use client";
import ShelterInfo from "@/src/windows/entities/shelters/ui/ShelterInfo";
import "./styles/ShelterPage.css";
import ShelterPosts from "@/src/windows/entities/shelters/ui/ShelterPosts";
import { useEffect } from "react";
import { useAppDispatch } from "@/src/windows/app/store/store";
import { getShelterByIdThunk } from "@/src/windows/entities/shelters/shelterSlice";

interface ShelterPageProps {
  shelterId?: number;
}
// params из url надо перебрасывать в каждый компонент
const ShelterPage = ({ shelterId }: ShelterPageProps): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (shelterId) {
      dispatch(getShelterByIdThunk(shelterId));
    }
  }, [shelterId, dispatch]);

  return (
    <div className="ShelterPage">
      <ShelterInfo />
      <ShelterPosts />
    </div>
  );
};

export default ShelterPage;
