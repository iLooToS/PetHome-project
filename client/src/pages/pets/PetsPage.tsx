'use client'
import { RootState, useAppDispatch } from '@/src/app/store/store'
import { loadAllPetsThunk } from '@/src/entities/pets/petsSlice'
import { IPet } from '@/src/entities/pets/types/PetsTypes'
import PetCard from '@/src/entities/pets/ui/PetCard'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const filterPetsFunc = (searchText: string, listOfPets: IPet[]) => {
	if (!searchText) {
		return listOfPets
	}
	return listOfPets.filter(
		({ petSize, petType }) =>
			petType.toLowerCase().includes(searchText.toLowerCase()) ||
			petSize.toLowerCase().includes(searchText.toLowerCase())
	)
}

const PetsPage: React.FC = () => {
	const dispatch = useAppDispatch()
	const { pets } = useSelector((state: RootState) => state.pets)
	const [filterPets, setFilterPets] = useState(pets)
	const [search, setSearch] = useState('')

	useEffect(() => {
		void dispatch(loadAllPetsThunk())
	}, [dispatch])

	useEffect(() => {
		const Debounce = setTimeout(() => {
			const filteredPets = filterPetsFunc(search, pets)
			setFilterPets(filteredPets)
		}, 100)
		return () => clearTimeout(Debounce)
	}, [search, pets, filterPets])

	return (
		<div className='min-h-screen' style={{ padding: '20px' }}>
			<div className='search-container'>
				<label htmlFor='search-input'>Умный Поиск</label>
				<input
					id='search-input'
					value={search}
					autoFocus
					type='text'
					autoComplete='off'
					placeholder='Введите название...'
					onChange={e => setSearch(e.target.value)}
				/>
			</div>
			<h1>Крутые питомцы</h1>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					overflowX: 'auto',
					marginBottom: '10px',
				}}
			></div>
			<div
				style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
			></div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					overflowX: 'auto',
					marginBottom: '10px',
				}}
			></div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
					gap: '10px',
				}}
			>
				{filterPets.map(pet => (
					<PetCard key={pet.id} pet={pet} />
				))}
			</div>
		</div>
	)
}

export default PetsPage
