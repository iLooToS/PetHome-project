"use client";
import { RootState } from "@/src/windows/app/store/store";
import AnimalCard from "@/src/windows/entities/pets/ui/AnimalCard";
import { Skeleton, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

type ShelterPetsPageProps = {};
const ShelterPetsPage = ({}: ShelterPetsPageProps): JSX.Element => {
  const { pets, loading } = useSelector((state: RootState) => state.pets);
  const { currentShelter } = useSelector((state: RootState) => state.shelters);
  const path = usePathname();
  const shelterId = path?.split("/")[2];
  const currentPets = shelterId
    ? pets.filter((pet) => pet.shelterId === +shelterId)
    : [];

  return (
    <div className="min-h-screen" style={{ padding: "20px" }}>
      {loading ? (
        <>
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton
            key={shelterId}
            variant="rectangular"
            // width={210}
            height={458}
          />
        </>
      ) : (
        <>
          <Typography variant="h5" gutterBottom>
            Питомцы {currentShelter?.name}
          </Typography>
          {!currentPets.length && (
            <Typography variant="h6" gutterBottom>
              Еще пока не добавили
            </Typography>
          )}
          {pets &&
            currentPets &&
            currentPets.map((pet) => <AnimalCard key={pet.id} pet={pet} />)}
        </>
      )}
    </div>
  );
};
export default ShelterPetsPage;
