import { RootState } from '@/src/app/store/store'
import Loader from '@/src/widgets/Loader/Loader'
import CreatePetModal from '@/src/widgets/Modal/CreatePetModal'
import { usePathname, useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

const ShelterInfo = (): JSX.Element => {
	const router = useRouter()
	const path = usePathname()
	const { currentShelter } = useSelector((state: RootState) => state.shelters)
	const { user } = useSelector((state: RootState) => state.auth)
	console.log(currentShelter);
	
	if (!currentShelter) return <Loader />
	return (
		<div className='shelter-content-wrapper'>
			<div className='shelter-info-wrapper'>
				<div className='shelter-image-wrapper'>
					<img src={currentShelter?.logo} alt='Shelter Image' />
				</div>
				<div className='shelter-text-wrapper'>
					<h2>{currentShelter?.name}</h2>
					<p>
						{currentShelter?.Location?.city}{' '}
						{currentShelter?.Location?.streetName}
					</p>
					<div className='shelter-button-wrapper'>
						<button type='button'onClick={() => router.push(`http://localhost:3001/${path}/pets`)}>Show pets</button>
						<button type='button'>Reviews</button>
						{currentShelter.userId === user?.id &&
						<CreatePetModal shelterId={currentShelter.id}/>
						}
					</div>
				</div>
			</div>
			<div className='shelter-description-wrapper'>
				<p>{currentShelter?.description}</p>
			</div>
		</div>
	)
}

export default ShelterInfo
