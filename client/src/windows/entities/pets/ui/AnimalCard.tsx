import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IPet } from "../types/PetsTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PetCardProps {
  pet: IPet;
}

export default function AnimalCard({ pet }: PetCardProps) {
  const router = useRouter();
  return (
    <Card sx={{ maxWidth: 400, borderRadius: "5%", marginBottom: "5px" }}>
      <CardActionArea onClick={() => router.push(`/search/${pet.id}`)}>
        {pet.PetImages?.length > 0 && (
          <Image
            key={pet?.PetImages[0].id}
            src={pet?.PetImages[0].url}
            alt={pet?.PetImages[0].url}
            style={{
              objectFit: "fill",
              height: 380,
              borderRadius: "5%",
            }}
            height={200}
            width={400}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pet.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pet?.petType === "Кошка"
              ? pet.isSex
                ? "Кот"
                : "Кошка"
              : "Собака"}{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
