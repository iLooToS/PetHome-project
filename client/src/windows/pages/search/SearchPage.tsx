"use client";
import { RootState, useAppDispatch } from "@/src/windows/app/store/store";
import { IPet } from "@/src/windows/entities/pets/types/PetsTypes";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles/SearchPage.css";
import AnimalCard from "@/src/windows/entities/pets/ui/AnimalCard";
import FilterPet from "../../widgets/filterPet/FilterPet";
import { TextField, Typography } from "@mui/material";
import { getAllSheltersThunk } from "../../entities/shelters/shelterSlice";

const filterPetsFunc = (searchText: string, listOfPets: IPet[]) => {
  if (!searchText) {
    return listOfPets;
  }
  console.log(listOfPets);

  return listOfPets.filter(({ name }) =>
    name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const SearchPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pets, filterPets } = useSelector((state: RootState) => state.pets);
  const [filterByNamePets, setFilterByNamePets] = useState(pets);
  const [search, setSearch] = useState("");

	useEffect(() => {
		void dispatch(getAllSheltersThunk())
	}, [dispatch]);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredPets = filterPetsFunc(search, filterPets);
      setFilterByNamePets(filteredPets);
    }, 100);
    return () => clearTimeout(Debounce);
  }, [search, filterPets]);

  return (
    <div className="min-h-screen" style={{ padding: "20px" }}>
      <div className="flex justify-between ">
        <FilterPet />
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="filled-basic"
          label="Поиск по кличке"
          variant="filled"
          color="warning"
          size="small"
        />
      </div>
      <Typography variant="h3">Крутые питомцы</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          marginBottom: "10px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {filterByNamePets &&
          filterByNamePets.map((pet) => <AnimalCard key={pet.id} pet={pet} />)}
      </div>
    </div>
  );
};

export default SearchPage;
