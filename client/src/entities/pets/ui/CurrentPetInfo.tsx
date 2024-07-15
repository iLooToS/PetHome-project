import React from 'react'
import { IPet } from '../types/PetsTypes'
import '../../../pages/pets/CurrentPetPage'
import { IconButton, Skeleton, Typography } from '@mui/material'
import { Undo2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

type CurrentPetInfoProps = {
	pet: IPet | undefined
	loading: boolean
}

const CurrentPetInfo = ({ pet, loading }: CurrentPetInfoProps): JSX.Element => {
	const router = useRouter()
	return (
		<div className=' animal-card'>
			<div className='flex justify-between'>
				{loading ? (
					<Skeleton
						variant='text'
						sx={{ fontSize: '2rem', width: '400px', borderRadius: 2 }}
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
				{loading ? (
					<Skeleton
						key={pet?.id}
						variant='rectangular'
						style={{
							objectFit: 'fill',
							height: 350,
							borderRadius: '5%',
						}}
					/>
				) : (
					pet &&
					pet.PetImages.length > 0 && (
						<Image
							key={pet?.PetImages[0].id}
							src={pet?.PetImages[0].url}
							alt={pet?.PetImages[0].url}
							style={{
								objectFit: 'fill',
								height: 350,
								borderRadius: '5%',
							}}
							height={200}
							width={350}
						/>
					)
				)}
			</div>
			<div className='animal-description'>
				{loading ? (
					<Skeleton
						variant='text'
						sx={{ fontSize: '2rem', width: '350px', borderRadius: 2 }}
					/>
				) : (
					<Typography variant='body1' gutterBottom>
						{pet?.description}
					</Typography>
				)}
			</div>
			<div className='animal-details'>
				<ul>
					{loading ? (
						<Skeleton
							variant='text'
							sx={{ fontSize: '3rem', width: '350px', borderRadius: 2 }}
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
