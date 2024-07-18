'use client'
import React, { useEffect, useState } from 'react'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store/store'
import { IChat } from '../../entities/chat/types/chatTypes'

function findChatsForUser(chats: IChat[], userId: number): IChat[] {
	return chats.filter(chat =>
		chat.ChatUsers.some(chatUser => chatUser.userId === userId)
	)
}

const ChatList: React.FC = () => {
	const { chats } = useSelector((state: RootState) => state.chats)
	const { user } = useSelector((state: RootState) => state.auth)
	const [userChats, setUserChats] = useState<IChat[]>([])
	useEffect(() => {
		if (chats && user) {
			const filteredChats = findChatsForUser(chats, user.id)
			setUserChats(filteredChats)
		}
	}, [chats, user])
	return (
		<div style={{ padding: '16px' }}>
			<Typography variant='h3' gutterBottom>
				Ваши чаты
			</Typography>
			<List>
				{userChats.length > 0 ? (
					userChats.map(chat => (
						<Link key={chat.id} href={`/chat/${chat.id}`} passHref>
							<ListItem button component='button'>
								<ListItemText primary={chat.name} />
							</ListItem>
						</Link>
					))
				) : (
					<Typography variant='h4' gutterBottom>
						Пока что у вас нет чатов
					</Typography>
				)}
			</List>
		</div>
	)
}

export default ChatList
