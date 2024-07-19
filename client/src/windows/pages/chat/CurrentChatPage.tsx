'use client'
import React, { useEffect, useRef, useState } from 'react'
import {
	Typography,
	Box,
	TextField,
	Button,
	IconButton,
	Paper,
	DialogContent,
	Avatar,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import { RootState, useAppDispatch } from '../../app/store/store'
import { useSelector } from 'react-redux'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { getChat, refreshChat } from '../../entities/chat/chatSlise'
import { useSocket } from '../../app/services/useSocket'
import { DeleteIcon } from 'lucide-react'
import { MessageId } from '../../entities/chat/types/chatTypes'
import './styles/CurrentChatPage.css'
import Image from 'next/image'

interface ChatDetailProps {
	chatId: number
}

const ChatDetail: React.FC<ChatDetailProps> = ({ chatId }) => {
	const router = useRouter()
	const [message, setMessage] = useState('')
	const dispatch = useAppDispatch()
	const { user } = useSelector((state: RootState) => state.auth)
	const { chats, chat, loading } = useSelector(
		(state: RootState) => state.chats
	)
	const { socket } = useSocket()

	// Обрабатываем получение нового сообщения от сервера
	useEffect(() => {
		if (chats) {
			dispatch(getChat(chatId))
		}
		if (socket) {
			socket.on('message', newChat => {
				dispatch(refreshChat(newChat))
			})
		}
	}, [socket, chats, chatId, dispatch])

	const handleSendMessage = () => {
		if (message.trim() && socket) {
			const msg = { type: 'ADD_MESSAGE', chatId: chat?.id, user, text: message }
			socket.emit('message', msg)
			setMessage('')
		}
	}

	const handleDeleteMessage = (id: MessageId) => {
		if (socket) {
			const msg = {
				type: 'DELETE_MESSAGE',
				chatId: chat?.id,
				user,
				text: message,
				messageId: id,
			}
			socket.emit('message', msg)
			setMessage('')
		}
	}

	const commentsContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (commentsContainerRef.current) {
			commentsContainerRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'end',
			})
		}
	}, [chat])

	// if (!chat) {
	// 	return <Typography>Чат не найден</Typography>
	// }

	return (
		<Paper className='chat-container'>
			<div className='flex justify-between'>
				<Typography variant='h4' gutterBottom>
					{chat && chat.name}
				</Typography>
				<Button
					style={{ textAlign: 'center', height: '40px' }}
					variant='contained'
					onClick={() => router.back()}
					color='success'
				>
					Назад
				</Button>
			</div>
			<DialogContent
				sx={{ padding: '0', minHeight: '150px', width: '100%' }}
				dividers
			>
				<Box ref={commentsContainerRef} className='chat-messages'>
					{chat &&
						chat.ChatMessages &&
						chat.ChatMessages.map((msg, index) => (
							<Paper key={index} className='message-item'>
								<div className='flex justify-between'>
									{msg && msg.User.img ? (
										<Box sx={{ mr: 1 }}>
											<Avatar>
												<Image
													src={msg.User.img}
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
									<Box sx={{ flexGrow: 1 }}>
										<Typography
											sx={{ mt: 1 }}
											className='user-comment-wrapper-text'
										>
											{msg.User.name}
										</Typography>
									</Box>
									<Typography variant='subtitle2' color='textSecondary'>
										{new Date(msg.createdAt).toLocaleString('ru-RU', {
											hour: '2-digit',
											minute: '2-digit',
											year: 'numeric',
											month: '2-digit',
											day: '2-digit',
										})}
									</Typography>
								</div>
								<div className='flex justify-between'>
									<Typography variant='body1' style={{ marginTop: '15px' }}>
										{msg.text}
									</Typography>
									{user && user.id === msg.sendUserId && (
										<IconButton
											onClick={() => handleDeleteMessage(msg.id)}
											aria-label='delete'
										>
											<DeleteIcon />
										</IconButton>
									)}
								</div>
							</Paper>
						))}
				</Box>
			</DialogContent>
			<Box className='chat-input'>
				<TextField
					value={message}
					onChange={e => setMessage(e.target.value)}
					variant='outlined'
					size='small'
					fullWidth
					placeholder='Введите сообщение...'
				></TextField>
				<Button variant='contained' color='primary' onClick={handleSendMessage}>
					Отправить
				</Button>
			</Box>
		</Paper>
	)
}

export default ChatDetail
