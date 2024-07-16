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
export interface IPetCreate {
	[key: string]: any;
	shelterId?: number
	petType: 'Собака' | 'Кошка' | string
	petSize: 'Маленькая' | 'Средняя' | 'Большая' | string
	name: string
	age: number
	description: string
	isSex: boolean | string
	isTemperament: boolean | string
	isCastration: boolean | string
	isChipping: boolean | string
	isVaccination: boolean | string
	isPassport: boolean | string
	photo?: File | null
}
