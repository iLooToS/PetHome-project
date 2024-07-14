'use client'
import { RootState, useAppDispatch } from '@/src/app/store/store'
import { IPet } from '@/src/entities/pets/types/PetsTypes'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './styles/SearchPage.css'
import AnimalCard from '@/src/entities/pets/ui/AnimalCard'

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

const SearchPage: React.FC = () => {
	const dispatch = useAppDispatch()
	const { pets } = useSelector((state: RootState) => state.pets)
	const [filterPets, setFilterPets] = useState(pets)
	const [search, setSearch] = useState('')

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
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '10px',
				}}
			>
				{filterPets.map(pet => (
					<AnimalCard key={pet.id} pet={pet} />
				))}
			</div>
		</div>
	)
}

export default SearchPage
