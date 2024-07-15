import type { AxiosResponse } from 'axios'
import axiosInstance from '@/src/windows/app/services/axiosInstance'
import type {
	User,
	UserForLoga,
	UserWithoutIdwithPassword,
} from '../types/userTypes'

type ResForAuth = {
	message: 'success'
	user: User
	accessToken: string
}

class AuthApi {
	static registration = async (
		body: UserWithoutIdwithPassword
	): Promise<ResForAuth> => {
		try {
			const result: AxiosResponse<ResForAuth> = await axiosInstance.post(
				'/auth/registration',
				body
			)
			return result.data
		} catch (error) {
			throw new Error('Не регает че то')
		}
	}

	static authorization = async (body: UserForLoga): Promise<ResForAuth> => {
		try {
			const result: AxiosResponse<ResForAuth> = await axiosInstance.post(
				'/auth/authorization',
				body
			)
			return result.data
		} catch (error) {
			throw new Error('Не логает че то')
		}
	}

	static refreshUser = async (): Promise<ResForAuth> => {
		try {
			const result: AxiosResponse<ResForAuth> = await axiosInstance.get(
				'/tokens/refresh'
			)
			return result.data
		} catch (error) {
			throw new Error(`Не обновляет че то`)
		}
	}

	static logout = async (): Promise<{ message: 'success' }> => {
		try {
			const result: AxiosResponse<{ message: 'success' }> =
				await axiosInstance.get('/auth/logout')
			return result.data
		} catch (error) {
			throw new Error('Не выходит че то')
		}
	}
}

export default AuthApi
