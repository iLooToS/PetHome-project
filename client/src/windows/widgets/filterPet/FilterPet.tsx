import React, { useEffect, useState } from 'react'
import {
	Button,
	Drawer,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
	Box,
	IconButton,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Checkbox,
} from '@mui/material'

import { Filter } from 'lucide-react'
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff'
import { returnFilterPets, filterPets } from '../../entities/pets/petsSlice'
import { RootState, useAppDispatch } from '../../app/store/store'
import { useSelector } from 'react-redux'

interface Location {
	city: string
	createdAt: string
	id: number
	latitude: number
	longitude: number
	streetName: string
	updatedAt: string
}

interface Shelter {
	Location: Location
	createdAt: string
	description: string
	id: number
	locationId: number
	logo: string
	name: string
	status: boolean
	updatedAt: string
	userId: number
}

interface Pet {
	id: number
	shelterId: number
	petType: string
	petSize: string
	name: string
	age: number
	description: string
	isCastration: boolean
	isChipping: boolean
	isPassport: boolean
	isSex: boolean
	isTemperament: boolean
	isVaccination: boolean
	createdAt: string
	updatedAt: string
	Shelter: Shelter
}

interface Filter {
	type: string
	size: string
	sex: string
	city: string
	isPassport: string
	isVaccination: boolean
	isCastration: string
	isChipping: string
	isTemperament: string
}

const FilterPet: React.FC = () => {
	const dispatch = useAppDispatch()
	const [isOpen, setIsOpen] = useState(false)
	const [petType, setPetType] = useState('')
	const [petSize, setPetSize] = useState('')
	const [city, setCity] = useState('')
	const [isSex, setIsSex] = useState('')
	const [isTemperament, setIsTemperament] = useState('')
	const [isPassport, setIsPassport] = useState('')
	const [isVaccination, setIsVaccination] = useState('')
	const [isCastration, setIsCastration] = useState('')
	const [isChipping, setIsChipping] = useState('')
	const cityFilter = useSelector((state: RootState) => state.pets.pets)
	const [allCity, setAllCity] = useState<string[]>([])

	const getUniqueCities = (cityFilter: Pet[]): string[] => {
		const cities = cityFilter.map(city => city.Shelter.Location.city)
		return Array.from(new Set(cities))
	}

	useEffect(() => {
		if (cityFilter) {
			const data = getUniqueCities(cityFilter as unknown as Pet[])
			setAllCity(data)
		}
		
	}, [cityFilter])

	const toggleFilter = () => {
		setIsOpen(!isOpen)
	}
	const returnFilter = () => {
		dispatch(returnFilterPets())
		setIsOpen(!isOpen)
	}

	const applyFilters = () => {
		dispatch(
			filterPets({
				petType,
				petSize,
				city,
				isSex,
				isTemperament,
				isChipping,
				isPassport,
				isVaccination,
				isCastration,
			})
		)
		setIsOpen(false)
	}

	return (
		<div>
			<IconButton
				size='large'
				onClick={toggleFilter}
				color='warning'
				aria-label='add to shopping cart'
			>
				<Filter fontSize='large' />
			</IconButton>
			<Drawer
				anchor='bottom'
				open={isOpen}
				onClose={toggleFilter}
				sx={{ width: '100%', maxWidth: 425, margin: 'auto' }}
			>
				<Box p={2} role='presentation' sx={{ maxWidth: 425, margin: 'auto' }}>
					<div className='flex justify-between'>
						<Typography variant='h6' gutterBottom>
							Фильтрация
						</Typography>
						<Button onClick={returnFilter}>
							<FilterAltOffIcon fontSize='large' />
						</Button>
					</div>
					<div className='flex gap-20 '>
					<FormControl>
						<FormLabel id='demo-row-radio-buttons-group-label'>
							Наличие паспорта
						</FormLabel>
						<RadioGroup
							row
							aria-labelledby='demo-row-radio-buttons-group-label'
							id='sex'
							name='sex'
							onChange={e => setIsPassport(e.target.value)}
						>
							<FormControlLabel value={false} control={<Radio />} label='Нет' />
							<FormControlLabel value={true} control={<Radio />} label='Да' />
						</RadioGroup>
					</FormControl>
					<FormControl>
						<FormLabel id='demo-row-radio-buttons-group-label'>
							Чипирование
						</FormLabel>
						<RadioGroup
							row
							aria-labelledby='demo-row-radio-buttons-group-label'
							id='sex'
							name='sex'
							onChange={e => setIsChipping(e.target.value)}
						>
							<FormControlLabel value={false} control={<Radio />} label='Нет' />
							<FormControlLabel value={true} control={<Radio />} label='Да' />
						</RadioGroup>
					</FormControl>
					</div>
					<div className='flex gap-20 '>
					<FormControl>
						<FormLabel id='demo-row-radio-buttons-group-label'>
							Вакцинация
						</FormLabel>
						<RadioGroup
							row
							aria-labelledby='demo-row-radio-buttons-group-label'
							id='sex'
							name='sex'
							onChange={e => setIsVaccination(e.target.value)}
						>
							<FormControlLabel value={false} control={<Radio />} label='Нет' />
							<FormControlLabel value={true} control={<Radio />} label='Да' />
						</RadioGroup>
					</FormControl>
					<FormControl>
						<FormLabel id='demo-row-radio-buttons-group-label'>
							Кастрация
						</FormLabel>
						<RadioGroup
							row
							aria-labelledby='demo-row-radio-buttons-group-label'
							id='sex'
							name='sex'
							onChange={e => setIsCastration(e.target.value)}
						>
							<FormControlLabel value={false} control={<Radio />} label='Нет' />
							<FormControlLabel value={true} control={<Radio />} label='Да' />
						</RadioGroup>
					</FormControl>
					</div>
					<FormControl>
						<FormLabel id='demo-row-radio-buttons-group-label'>
							Темперамент
						</FormLabel>
						<RadioGroup
							row
							aria-labelledby='demo-row-radio-buttons-group-label'
							id='sex'
							name='sex'
							onChange={e => setIsTemperament(e.target.value)}
						>
							<FormControlLabel
								value={false}
								control={<Radio />}
								label='Спокойный'
							/>
							<FormControlLabel
								value={true}
								control={<Radio />}
								label='Активный'
							/>
						</RadioGroup>
					</FormControl>
					<FormControl>
						<FormLabel id='demo-row-radio-buttons-group-label'>Пол</FormLabel>
						<RadioGroup
							row
							aria-labelledby='demo-row-radio-buttons-group-label'
							id='sex'
							name='sex'
							onChange={e => setIsSex(e.target.value)}
						>
							<FormControlLabel
								value={false}
								control={<Radio />}
								label='Девочка'
							/>
							<FormControlLabel
								value={true}
								control={<Radio />}
								label='Мальчик'
							/>
						</RadioGroup>
					</FormControl>
					<FormControl fullWidth sx={{ marginBottom: 2 }}>
						<InputLabel id='type-label'>Вид</InputLabel>
						<Select
							labelId='type-label'
							id='type'
							name='type'
							value={petType}
							onChange={e => setPetType(e.target.value)}
							label='Вид'
						>
							<MenuItem value=''>
								<em>Выберите вид</em>
							</MenuItem>
							<MenuItem value='Кошка'>Кошка</MenuItem>
							<MenuItem value='Собака'>Собака</MenuItem>
						</Select>
					</FormControl>
					<FormControl fullWidth sx={{ marginBottom: 2 }}>
						<InputLabel id='size-label'>Размер</InputLabel>
						<Select
							labelId='size-label'
							id='size'
							name='size'
							value={petSize}
							onChange={e => setPetSize(e.target.value)}
							label='Размер'
						>
							<MenuItem value=''>
								<em>Выберите размер</em>
							</MenuItem>
							<MenuItem value='Маленький'>Маленький</MenuItem>
							<MenuItem value='Средний'>Средний</MenuItem>
							<MenuItem value='Большой'>Большой</MenuItem>
						</Select>
					</FormControl>
					<FormControl fullWidth sx={{ marginBottom: 2 }}>
						<InputLabel id='city-label'>Город</InputLabel>
						<Select
							labelId='city-label'
							id='city'
							name='city'
							value={city}
							onChange={e => setCity(e.target.value)}
							label='Город'
						>
							<MenuItem value=''>
								<em>Выберите город</em>
							</MenuItem>
							{allCity &&
								allCity.map(city => (
									<MenuItem key={city} value={city}>
										{city}
									</MenuItem>
								))}
						</Select>
					</FormControl>
					<Button
						variant='contained'
						color='primary'
						onClick={applyFilters}
						fullWidth
					>
						Применить фильтры
					</Button>
				</Box>
			</Drawer>
		</div>
	)
}

export default FilterPet
