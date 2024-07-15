import React from "react";
import { IPet } from "../types/PetsTypes";
import "../../../pages/pets/CurrentPetPage";
import { Skeleton, Typography } from "@mui/material";
import Image from "next/image";

type CurrentPetInfoProps = {
  pet: IPet | undefined;
  loading: boolean;
};

const CurrentPetInfo = ({ pet, loading }: CurrentPetInfoProps): JSX.Element => {
  return (
    <div className="animal-card">
      {loading ? (
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      ) : (
        <Typography variant="h5" gutterBottom>
          {pet?.petType} {pet?.name}, {pet?.age}{" "}
          {pet && pet.age > 4 ? "лет" : pet && pet.age < 2 ? "год" : "года"}
        </Typography>
      )}
      <div>
        {loading ? (
          <Skeleton
            key={pet?.id}
            variant="rectangular"
            // width={210}
            height={458}
          />
        ) : (
          pet &&
          pet.PetImages.length > 0 && (
            <Image
              key={pet?.PetImages[0].id}
              src={pet?.PetImages[0].url}
              alt={pet?.PetImages[0].url}
              // width={210}
              height={118}
            />
          )
        )}
      </div>
      <div className="animal-description">
        <Typography variant="body1" gutterBottom>
          {pet?.description}
        </Typography>
      </div>
      <div className="animal-details">
        <ul>
          <li>
            <strong>Пол:</strong> {!pet?.isSex ? "Девочка" : "Мальчик"}
          </li>
          <li>
            <strong>Возраст:</strong> {pet?.age}{" "}
            {pet && pet.age > 4 ? "лет" : pet && pet.age < 2 ? "год" : "года"}
          </li>
          <li>
            <strong>Размер:</strong> {pet?.petSize}
          </li>
          <li>
            <strong>Кастрирован:</strong> {pet?.isCastration ? "Да" : "Нет"}
          </li>
          <li>
            <strong>Активность:</strong>{" "}
            {pet?.isTemperament ? "Активный" : "Спокойный"}
          </li>
          <li>
            <strong>Чипирован:</strong> {pet?.isChipping ? "Да" : "Нет"}
          </li>
          <li>
            <strong>Паспорт:</strong> {pet?.isPassport ? "Да" : "Нет"}
          </li>
          <li>
            <strong>Приучен к лотку:</strong> Да
          </li>
          <li>
            <strong>Приют:</strong> {pet?.Shelter.name}
          </li>
          <li>
            <strong>Город:</strong> {pet?.Shelter.Location?.city}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentPetInfo;
