import { AxiosResponse } from 'axios'
import { IPet, IPetCreate, PetId } from '../types/PetsTypes'
import axiosInstance from '@/src/app/services/axiosInstance'

class PetsApi {
	static getAllPets = async (): Promise<IPet[]> => {
		try {
			const response: AxiosResponse<{ message: string; pets: IPet[] }> =
				await axiosInstance.get('/pets')
			return response.data.pets
		} catch (error) {
			throw new Error('Не получил всех животных')
		}
	}

	static getPetsById = async (id: PetId): Promise<IPet> => {
		try {
			const result: AxiosResponse<{
				message: 'success'
				pet: IPet
			}> = await axiosInstance.get(`/pets/${id}`)
			return result.data.pet
		} catch (error) {
			throw new Error('Не получил питомца по id')
		}
	}
	static createPet = async (body: FormData): Promise<IPet> => {
		try {
			const config = { headers: { 'Content-Type': 'multipart/form-data' } }
			const result: AxiosResponse<{
				message: 'success'
				pet: IPet
			}> = await axiosInstance.post(`/pets`, body, config)
			return result.data.pet
		} catch (error) {
			throw new Error('Не получил питомца по id')
		}
	}

	static deletePet = async (id: PetId): Promise<PetId> => {
		try {
			const { data }: AxiosResponse<{ message: 'success' }> =
				await axiosInstance.delete(`/pets/${id}`)
			if (data.message === 'success') {
				return id
			}
			return data.message
		} catch (error) {
			throw new Error('Не удалил питомца')
		}
	}
}

export default PetsApi
