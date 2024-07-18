import { AxiosResponse } from 'axios'
import { ChatId, IChat, MessageId } from '../types/chatTypes'
import axiosInstance from '@/src/windows/app/services/axiosInstance'
import { number } from 'yup'

class ChatApi {
	static getAllChats = async (): Promise<IChat[]> => {
		try {
			const response: AxiosResponse<{ message: string; chats: IChat[] }> =
				await axiosInstance.get('/chats')
			return response.data.chats
		} catch (error) {
			throw new Error('Не получил все чаты')
		}
	}
	static getChatById = async (id: ChatId): Promise<IChat> => {
		try {
			const result: AxiosResponse<{
				message: 'success'
				chat: IChat
			}> = await axiosInstance.get(`/chats/${id}`)
			return result.data.chat
		} catch (error) {
			throw new Error('Не получил чат по id')
		}
	}
	static deleteMessage = async ({
		chatId,
		messageId,
	}: {
		chatId: ChatId
		messageId: MessageId
	}): Promise<IChat> => {
		try {
			const { data }: AxiosResponse<{ message: 'success'; chat: IChat }> =
				await axiosInstance.delete(`/chats/${chatId}/messages/${messageId}`)
			if (data.message === 'success') {
				return data.chat
			}
			return data.message
		} catch (error) {
			throw new Error('Не удалил сообщение')
		}
	}
	static createMessage = async ({
		text,
		chatId,
	}: {
		text: string
		chatId: ChatId
	}): Promise<IChat> => {
		try {
			const { data }: AxiosResponse<{ message: 'success'; chat: IChat }> =
				await axiosInstance.post(`/chats/${chatId}/messages`, { text })
			if (data.message === 'success') {
				return data.chat
			}
			return data.message
		} catch (error) {
			throw new Error('Не создал сообщение')
		}
	}
	static createChat = async ({
		shelterId,
		petName,
	}: {
		petName: string
		shelterId: number
	}) => {
		try {
			const { data }: AxiosResponse<{ message: 'success'; chat: IChat }> =
				await axiosInstance.post(`/chats/`, {
					shelterId,
					petName,
				})
			if (data.message === 'success') {
				return data.chat
			}
			return data.message
		} catch (error) {
			throw new Error('Не создал сообщение')
		}
	}
}
export default ChatApi
