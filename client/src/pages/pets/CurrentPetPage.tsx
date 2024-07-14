'use client'
import { RootState, useAppDispatch } from '@/src/app/store/store'
import { loadPetsByIdThunk } from '@/src/entities/pets/petsSlice'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './CurrentPetPage.css'
import CurrentPetInfo from '../../entities/pets/ui/CurrentPetInfo'
import { Button } from '@mui/material'

interface ShelterPageProps {
	petId: number
}
const CurrentPetPage = ({ petId }: ShelterPageProps): JSX.Element => {
	const { pet, loading } = useSelector((state: RootState) => state.pets)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(loadPetsByIdThunk(petId))
	}, [petId, dispatch])

	const router = useRouter()
	return (
		<div className=' CurrentPetPage'>
			<CurrentPetInfo pet={pet} loading={loading} />
			<div className='animal-actions'>
				<Button variant='contained' color='error'>
					Взять питомца
				</Button>
				<Button
					variant='contained'
					color='inherit'
					onClick={() => router.push(`/shelter/${pet?.Shelter.id}`)}
				>
					Узнать контакты
				</Button>
				<Button variant='contained' onClick={() => router.back()}>
					Назад
				</Button>
			</div>
		</div>
	)
}
export default CurrentPetPage
