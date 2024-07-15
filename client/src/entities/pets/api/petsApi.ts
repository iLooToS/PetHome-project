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
	static createPet = async (body: IPetCreate): Promise<IPet> => {
		try {
			console.log(body);
			
			const result: AxiosResponse<{
				message: 'success'
				pet: IPet
			}> = await axiosInstance.post(`/pets`, body)
			return result.data.pet
		} catch (error) {
			throw new Error('Не получил питомца по id')
		}
	}
}

export default PetsApi
