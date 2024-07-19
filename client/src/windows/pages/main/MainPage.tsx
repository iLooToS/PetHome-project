"use client";
import React, { useEffect } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store/store";
import { getAllSheltersThunk } from "../../entities/shelters/shelterSlice";

const Image = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: "10px",
  marginBottom: "20px",
});

const MainPage: React.FC = () => {
  const { shelters } = useSelector((state: RootState) => state.shelters);
  const dispatch = useAppDispatch();
console.log(shelters);

  useEffect(() => {
    dispatch(getAllSheltersThunk());
  }, [dispatch]);

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", marginTop: "50px" }}>
      <Image src="https://example.com/your-image.jpg" alt="Pet Home" />
      <Typography variant="h3" component="h1" gutterBottom>
        Pet Home
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Платформа для поиска домашних животных
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="primary" href="/about">
          Узнать больше
        </Button>
        <Typography variant="h5" component="h2" gutterBottom>
          Приюты
        </Typography>
        <Box></Box>
      </Box>
    </Container>
  );
};

export default MainPage;
