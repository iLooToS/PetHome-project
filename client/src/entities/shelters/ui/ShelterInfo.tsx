"use client";

import { useAppDispatch, type RootState } from "@/src/app/store/store";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { getShelterByIdthunk } from "../currentShelter";

const ShelterInfo = (): JSX.Element => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const { currentShelter } = useSelector(
    (state: RootState) => state.currentShelter
  );

  useEffect(() => {
    const shelterId = pathname ? parseInt(pathname.split("/")[2]) : null;
    if (shelterId) {
      dispatch(getShelterByIdthunk(shelterId));
    }
  }, [dispatch]);

  return (
    <div className="shelter-content-wrapper">
      <div className="shelter-info-wrapper">
        <div className="shelter-image-wrapper">
          <img src={currentShelter?.logo} alt="Shelter Image" />
        </div>
        <div className="shelter-text-wrapper">
          <h2>{currentShelter?.name}</h2>
          <p>
            {currentShelter?.location?.city}{" "}
            {currentShelter?.location?.streetName}
          </p>
          <div className="shelter-button-wrapper">
            <button type="button">Show pets</button>
            <button type="button">Reviews</button>
            <button type="button">Add pets</button>
          </div>
        </div>
      </div>
      <div className="shelter-description-wrapper">
        <p>{currentShelter?.description}</p>
      </div>
    </div>
  );
};

export default ShelterInfo;
