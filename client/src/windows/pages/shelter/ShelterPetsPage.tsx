'use client'
import { RootState } from '@/src/windows/app/store/store'
import AnimalCard from '@/src/windows/entities/pets/ui/AnimalCard'
import { Button, IconButton, Skeleton, Typography } from '@mui/material'
import { Undo2 } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import './styles/ShelterPetsPage.css'

type ShelterPetsPageProps = {}
const ShelterPetsPage = ({}: ShelterPetsPageProps): JSX.Element => {
	const { pets, loading } = useSelector((state: RootState) => state.pets)
	const { currentShelter } = useSelector((state: RootState) => state.shelters)
	const path = usePathname()
	const router = useRouter()
	const shelterId = path?.split('/')[2]
	const currentPets = shelterId
		? pets.filter(pet => pet.shelterId === +shelterId)
		: []

	return (
		<div className='min-h-screen' style={{ padding: '20px' }}>
			{loading ? (
				<>
					<Skeleton variant='text' sx={{ fontSize: '2rem' }} />
					<Skeleton
						key={shelterId}
						variant='rectangular'
						// width={210}
						height={458}
					/>
				</>
			) : (
				<>
					<div className='shelter-pets-page-info-navigate'>
						<Typography
							style={{ textAlign: 'center' }}
							variant='h4'
							gutterBottom
						>
							Питомцы {currentShelter?.name}
						</Typography>
						<IconButton
							aria-label='back'
							size='small'
							onClick={() => router.back()}
						>
							<Undo2 fontSize='small' />
						</IconButton>
					</div>

					{!currentPets.length && (
						<div style={{ textAlign: 'center' }}>
							<Typography
								style={{ textAlign: 'center' }}
								variant='h5'
								gutterBottom
							>
								Еще пока не добавили
							</Typography>

							{/* <Button
                style={{ textAlign: "center" }}
                variant="contained"
                onClick={() => router.back()}
                color="success"
              >
                Назад
              </Button> */}
						</div>
					)}
					{pets &&
						currentPets &&
						currentPets.map(pet => <AnimalCard key={pet.id} pet={pet} />)}
				</>
			)}
		</div>
	)
}
export default ShelterPetsPage
