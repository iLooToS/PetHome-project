'use client'
import React, { useEffect, useState } from 'react'
import { Typography, Box, TextField, Button, IconButton } from '@mui/material'
import { useRouter } from 'next/navigation'
import { RootState, useAppDispatch } from '../../app/store/store'
import { useSelector } from 'react-redux'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { getChat, refreshChat } from '../../entities/chat/chatSlise'
import { useSocket } from '../../app/services/useSocket'
import { DeleteIcon } from 'lucide-react'
import { MessageId } from '../../entities/chat/types/chatTypes'

interface ChatDetailProps {
	chatId: number
}

const ChatDetail: React.FC<ChatDetailProps> = ({ chatId }) => {
	const router = useRouter()
	const [message, setMessage] = useState('')
	const dispatch = useAppDispatch()
	const { user } = useSelector((state: RootState) => state.auth)
	const { chats, chat } = useSelector((state: RootState) => state.chats)
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

	if (!chat) {
		return <Typography>Чат не найден</Typography>
	}

	return (
		<Box style={{ padding: '16px' }}>
			<div className='flex justify-between'>
				<Typography variant='h4' gutterBottom>
					{chat.name}
				</Typography>
				<Button
					style={{ textAlign: 'center' }}
					variant='contained'
					onClick={() => router.back()}
					color='success'
				>
					Назад
				</Button>
			</div>
			<Box
				style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '16px' }}
			>
				{chat.ChatMessages.map((msg, index) => (
					<Box key={index} style={{ marginBottom: '8px' }}>
						<div className='flex justify-between '>
							<Typography variant='subtitle2' color='textSecondary'>
								User : {msg.sendUserId}
							</Typography>
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
						<div className='flex justify-between '>
							<Typography variant='body1'>{msg.text}</Typography>
							{user && user.id === msg.sendUserId && (
								<Button
									type='button'
									onClick={() => handleDeleteMessage(msg.id)}
									aria-label='delete'
								>
									<DeleteIcon />
								</Button>
							)}
						</div>
					</Box>
				))}
			</Box>
			<Box display='flex'>
				<TextField
					value={message}
					onChange={e => setMessage(e.target.value)}
					variant='outlined'
					fullWidth
					placeholder='Введите сообщение...'
				/>
				<Button variant='contained' color='primary' onClick={handleSendMessage}>
					Отправить
				</Button>
			</Box>
		</Box>
	)
}

export default ChatDetail
