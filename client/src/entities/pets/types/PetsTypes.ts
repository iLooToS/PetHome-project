import { Shelter } from '../../shelters/type/shelterTypes'

export interface IPet {
	id: number
	shelterId: number
	petType: 'Собака' | 'Кошка'
	petSize: 'Маленькая' | 'Средняя' | 'Большая'
	name: string
	age: number
	description: string
	isSex: boolean
	isTemperament: boolean
	isCastration: boolean
	isChipping: boolean
	isVaccination: boolean
	isPassport: boolean
	PetImages: IPetImage[]
	Shelter: Shelter
}

export interface IPetImage {
	id: number
	petId: number
	url: string
}

export type PetId = IPet['id']
export type PetWithoutId = Omit<IPet, 'id'>
