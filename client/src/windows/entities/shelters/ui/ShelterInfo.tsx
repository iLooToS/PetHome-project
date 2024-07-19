import { RootState } from '@/src/windows/app/store/store'
import CreatePetModal from '@/src/windows/widgets/Modal/CreatePetModal'
import CreatePostModal from '@/src/windows/widgets/Modal/CreatePostModal'
import { Skeleton, Typography } from '@mui/material'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

const ShelterInfo = (): JSX.Element => {
	const router = useRouter()
	const path = usePathname()
	const { currentShelter } = useSelector((state: RootState) => state.shelters)
	const { user } = useSelector((state: RootState) => state.auth)

	return (
		<>
			<div className='shelter-content-wrapper'>
        {currentShelter ? 
				<div className='shelter-info-wrapper'>
					<div className='shelter-image-wrapper'>
						{currentShelter?.logo && (
							<Image
								src={currentShelter?.logo}
								alt='Shelter Image'
								width={150}
								height={150}
							/>
						)}
					</div>
					<div className='shelter-text-wrapper'>
						<h2>{currentShelter?.name}</h2>
						<p>
							{currentShelter?.Location?.city}{' '}
							{currentShelter?.Location?.streetName}
						</p>
						<p>{currentShelter && currentShelter.phone}</p>
						<div className='shelter-button-wrapper'>
							<button
								type='button'
								onClick={() => router.push(`http://87.228.16.34:3001${path}/pets`)}
							>
								Показать питомцев
							</button>
							{currentShelter && currentShelter.userId === user?.id && (
								<div>
									<CreatePetModal shelterId={currentShelter.id} />
									<CreatePostModal shelterId={currentShelter.id} />
								</div>
							)}
						</div>
					</div>
				</div>
        : (<Skeleton
				variant='text'
				sx={{
					fontSize: '3rem',
					width: '350px',
					height: '350px',
					borderRadius: 2,
				}}
			/>)}
				<div className='shelter-description-wrapper'>
					<p>{currentShelter?.description}</p>
				</div>
				{/* <Typography className="text-center" variant="h6" component="h2">
        Новости приюта
      </Typography> */}
			</div>
			<Typography className='text-center' variant='h6' component='h2'>
				Новости приюта
			</Typography>
		</>
	)
}

export default ShelterInfo
