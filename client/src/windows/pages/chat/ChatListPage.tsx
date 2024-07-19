'use client'
import React, { useEffect, useState } from 'react'
import {
	List,
	ListItem,
	ListItemText,
	Typography,
	Paper,
	Avatar,
	Box,
} from '@mui/material'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store/store'
import { IChat } from '../../entities/chat/types/chatTypes'
import './styles/ChatListPage.css'
import Image from 'next/image'

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
		<div className='chat-list-wrapper'>
			<Typography variant='h3' gutterBottom>
				Ваши чаты
			</Typography>
			<List className='chat-list'>
				{userChats.length > 0 ? (
					userChats.map(chat => (
						<Link key={chat.id} href={`/chat/${chat.id}`} passHref>
							<Paper className='chat-item' elevation={3}>
								<ListItem button component='button'>
									<div className='flex w-screen justify-between'>
										{chat && chat.ChatMessages[0].User.img ? (
											<Box sx={{ mr: 1 }}>
												<Avatar>
													<Image
														src={chat.ChatMessages[0].User.img}
														alt='User Image'
														width={200}
														height={200}
													/>
												</Avatar>
											</Box>
										) : (
											<Box sx={{ mr: 1 }}>
												<Avatar></Avatar>
											</Box>
										)}
										<ListItemText primary={chat.ChatMessages[0].User.name} />
										<ListItemText primary={chat.name} />
									</div>
								</ListItem>
							</Paper>
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
