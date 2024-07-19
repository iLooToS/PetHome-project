const { Server } = require('socket.io')
const { Chat, ChatMessage, ChatUser, User } = require('../db/models')
const initializeSocket = server => {
	const io = new Server(server, {
		cors: { origin: 'http://87.228.16.34:3001' },
	})

	io.on('connection', socket => {
		console.log('Подсоединились')

		socket.on('disconnect', () => {
			console.log('Разъединились')
		})

		socket.on('message', async message => {
			const { type, text, chatId, user, messageId } = message
			console.log(message)
			switch (type) {
				case 'ADD_MESSAGE':
					const newMessage = await ChatMessage.create({
						text,
						chatId,
						sendUserId: user.id,
					})
					let chat = await Chat.findOne({
						where: { id: chatId },
						include: [
							{
								model: ChatUser,
							},
							{
								model: ChatMessage,
								include: [
									{
										model: User,
									},
								],
								separate: true,
								order: [['createdAt', 'ASC']], // Сортировка сообщений
							},
						],
					})
					console.log(chat)
					io.emit('message', chat)
					break
				case 'DELETE_MESSAGE':
					deleteMessage = await ChatMessage.destroy({
						where: { id: messageId, chatId, sendUserId: user.id },
					})
					const newChat = await Chat.findOne({
						where: { id: chatId },
						include: [
							{
								model: ChatUser,
							},
							{
								model: ChatMessage,
								include: [
									{
										model: User,
									},
								],
								separate: true,
								order: [['createdAt', 'ASC']], // Сортировка сообщений
							},
						],
					})
					io.emit('message', newChat)
					break
				default:
					break
			}
		})
	})
}

module.exports = initializeSocket
