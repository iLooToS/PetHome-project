export interface IPet {
	id: number
	petType: 'Собака' | 'Кошка'
	petSize: 'Маленькая' | 'Средняя' | 'Большая'
	name: string
	age: number
	description: string
	isSex: boolean
	isTemperament: boolean
	isChipping: boolean
	isVaccination: boolean
	isPassport: boolean
	PetImages: IPetImage[]
}

export interface IPetImage {
	id: number
	petId: number
	url: string
}

export type PetId = IPet['id']
export type PetWithoutId = Omit<IPet, 'id'>
