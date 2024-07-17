"use client";
import { RootState, useAppDispatch } from "@/src/windows/app/store/store";
import {
  deletePetThunk,
  loadPetsByIdThunk,
} from "@/src/windows/entities/pets/petsSlice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./CurrentPetPage.css";
import CurrentPetInfo from "../../entities/pets/ui/CurrentPetInfo";
import { Button } from "@mui/material";
import UpdatePetModal from "@/src/windows/widgets/Modal/UpdatePetModal";
import { getAllSheltersThunk } from "../../entities/shelters/shelterSlice";

interface ShelterPageProps {
  petId: number;
}
const CurrentPetPage = ({ petId }: ShelterPageProps): JSX.Element => {
  const { pet, loading } = useSelector((state: RootState) => state.pets);
  const { user } = useSelector((state: RootState) => state.auth);
  //   const { shelters } = useSelector((state: RootState) => state.shelters);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadPetsByIdThunk(petId));
    // dispatch(getAllSheltersThunk());
  }, [petId, dispatch]);
  console.log(pet);

	const router = useRouter()
	return (
		<div className=' CurrentPetPage'>
			<CurrentPetInfo pet={pet} loading={loading} />
			<div className='animal-actions'>
				{user &&
				<Button variant='contained' color='success'>
					Взять питомца
				</Button>
				}
				<Button
					variant='contained'
					color='inherit'
					onClick={() => router.push(`/shelter/${pet?.Shelter.id}`)}
				>
					Узнать контакты
				</Button>
				{user && pet && user.id === pet?.Shelter.id && (
					<>
						<UpdatePetModal currentPet={pet} shelterId={pet?.Shelter.id} />
						<Button
							variant='contained'
							color='error'
							onClick={() => {
								dispatch(deletePetThunk(petId))
								router.push('/search')
							}}
						>
							Удалить карточку
						</Button>
					</>
				)}
			</div>
		</div>
	)
}
export default CurrentPetPage

