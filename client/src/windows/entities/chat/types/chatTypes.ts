import { User } from '../../users/types/userTypes'

export interface IChat {
	id: number
	name: string
	createUserId: number
	ChatUsers: IChatUser[]
	ChatMessages: IChatMessage[]
	createdAt: string
}

export interface IChatUser {
	id: number
	userId: number
	chatId: number
}

export interface IChatMessage {
	id: number
	text: string
	sendUserId: number
	chatId: number
	createdAt: string
	User: User
}
export type MessageId = IChatMessage['id']
export type ChatId = IChat['id']
