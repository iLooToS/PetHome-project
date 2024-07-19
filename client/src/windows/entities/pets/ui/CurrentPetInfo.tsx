import React, { useState } from 'react'
import { IPet } from '../types/PetsTypes'
import '../../../pages/pets/CurrentPetPage.css'
import { IconButton, Skeleton, Typography, Button } from '@mui/material'
import { Undo2 } from 'lucide-react'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import AspectRatio from '@mui/joy/AspectRatio'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import PetCarousel from './PetImageCarousel'

type CurrentPetInfoProps = {
	pet: IPet | undefined
	loading: boolean
}

const CurrentPetInfo = ({ pet, loading }: CurrentPetInfoProps): JSX.Element => {
	const router = useRouter()
	const [showFullDescription, setShowFullDescription] = useState(false)

	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription)
	}

	const getDescription = () => {
		if (!pet?.description) return ''
		if (showFullDescription) return pet.description
		return pet.description.length > 100
			? pet.description.slice(0, 100) + '...'
			: pet.description
	}

	return (
		<div className='animal-card'>
			<div className='flex justify-between'>
				{loading ? (
					<Skeleton
						variant='text'
						sx={{
							fontSize: '2rem',
							width: '370px',
							height: '400px',
							borderRadius: 2,
						}}
					/>
				) : (
					<Typography variant='h5' gutterBottom>
						{pet?.petType === 'Кошка'
							? pet.isSex
								? 'Кот'
								: 'Кошка'
							: 'Собака'}{' '}
						{pet?.name}, {pet?.age}{' '}
						{pet && pet.age > 4 ? 'лет' : pet && pet.age < 2 ? 'год' : 'года'}
					</Typography>
				)}
				<IconButton
					aria-label='back'
					size='small'
					onClick={() => router.back()}
				>
					<Undo2 fontSize='small' />
				</IconButton>
			</div>
			<div>
				<PetCarousel pet={pet} />
			</div>
			<div className='animal-description'>
				{loading ? (
					<Skeleton
						variant='text'
						sx={{ fontSize: '2rem', width: '350px', borderRadius: 2 }}
					/>
				) : (
					<Typography variant='body1' gutterBottom>
						<strong>Описание:</strong> {getDescription()}
						{pet?.description && pet.description.length > 100 && (
							<Button onClick={toggleDescription} size='small'>
								{showFullDescription ? 'Скрыть' : 'Читать далее'}
							</Button>
						)}
					</Typography>
				)}
			</div>
			<div className='animal-details'>
				<ul>
					{loading ? (
						<Skeleton
							variant='text'
							sx={{
								fontSize: '3rem',
								width: '350px',
								height: '250px',
								borderRadius: 2,
							}}
						/>
					) : (
						<>
							<li>
								<strong>Пол:</strong> {!pet?.isSex ? 'Девочка' : 'Мальчик'}
							</li>
							<li>
								<strong>Возраст:</strong> {pet?.age}{' '}
								{pet && pet.age > 4
									? 'лет'
									: pet && pet.age < 2
									? 'год'
									: 'года'}
							</li>
							<li>
								<strong>Размер:</strong> {pet?.petSize}
							</li>
							<li>
								<strong>Кастрирован:</strong> {pet?.isCastration ? 'Да' : 'Нет'}
							</li>
							<li>
								<strong>Активность:</strong>{' '}
								{pet?.isTemperament ? 'Активный' : 'Спокойный'}
							</li>
							<li>
								<strong>Чипирован:</strong> {pet?.isChipping ? 'Да' : 'Нет'}
							</li>
							<li>
								<strong>Паспорт:</strong> {pet?.isPassport ? 'Да' : 'Нет'}
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
						</>
					)}
				</ul>
			</div>
		</div>
	)
}

export default CurrentPetInfo
