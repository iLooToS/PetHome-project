'use client'
import { RootState, useAppDispatch } from '@/src/windows/app/store/store'
import {
	deletePetThunk,
	loadPetsByIdThunk,
} from '@/src/windows/entities/pets/petsSlice'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import './CurrentPetPage.css'
import CurrentPetInfo from '../../entities/pets/ui/CurrentPetInfo'
import { Button } from '@mui/material'
import UpdatePetModal from '@/src/windows/widgets/Modal/UpdatePetModal'
import { createNewChatThunk } from '../../entities/chat/chatSlise'

interface ShelterPageProps {
	petId: number
}

const CurrentPetPage = ({ petId }: ShelterPageProps): JSX.Element => {
	const { pet, loading } = useSelector((state: RootState) => state.pets)
	const { user } = useSelector((state: RootState) => state.auth)
	const { chat } = useSelector((state: RootState) => state.chats)
	const dispatch = useAppDispatch()
	const router = useRouter()
	const chatInitialized = useRef(false)

	useEffect(() => {
		dispatch(loadPetsByIdThunk(petId))
	}, [petId, dispatch])

	useEffect(() => {
		if (chatInitialized.current && chat) {
			router.push(`/chat/${chat.id}`)
		}
	}, [chat, router])

	const handleChat = () => {
		if (pet) {
			chatInitialized.current = true
			void dispatch(
				createNewChatThunk({ petName: pet.name, shelterId: pet.shelterId })
			)
		}
	}

	return (
		<div className=' CurrentPetPage'>
			<CurrentPetInfo pet={pet} loading={loading} />
			<div className='animal-actions'>
				{user && user.id !== pet?.Shelter.userId && (
					<Button variant='contained' color='success' onClick={handleChat}>
						Написать приюту
					</Button>
				)}
				<Button
					variant='contained'
					color='primary'
					onClick={() => router.push(`/shelter/${pet?.Shelter.id}`)}
				>
					О приюте питомца
				</Button>
				{user && pet && user.id === pet?.Shelter.userId && (
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
