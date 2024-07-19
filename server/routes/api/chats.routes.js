const router = require('express').Router()
const {
	Chat,
	ChatUser,
	ChatMessage,
	Shelter,
	User,
} = require('../../db/models')
const verifyAccessToken = require('../../middleware/verifyAccessToken')

router.get('/', async (req, res) => {
	try {
		const chats = await Chat.findAll({
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
			order: [['id', 'ASC']], // Сортировка чатов
		})
		res.status(200).json({ message: 'success', chats })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

router.get('/:chatId', async (req, res) => {
	try {
		const { chatId } = req.params
		const chat = await Chat.findOne({
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
		res.status(200).json({ message: 'success', chat })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

router.post('/', verifyAccessToken, async (req, res) => {
	try {
		const { shelterId, petName } = req.body
		if (!shelterId || !petName) {
			return res
				.status(400)
				.json({ message: 'Пожалуйста, предоставьте shelterId и petName' })
		}

		// Находим приют и пользователя приюта
		const shelter = await Shelter.findOne({ where: { id: shelterId } })
		if (!shelter) {
			return res.status(404).json({ message: 'Приют не найден' })
		}

		const userShelter = await User.findOne({ where: { id: shelter.userId } })
		if (!userShelter) {
			return res.status(404).json({ message: 'Пользователь приюта не найден' })
		}

		// Находим существующий чат между пользователем и приютом
		const existingChat = await Chat.findOne({
			where: { name: shelter.name, createUserId: res.locals.user.id },
			include: [ChatUser, ChatMessage],
		})

		if (existingChat) {
			// Если чат существует, добавляем сообщение в существующий чат
			const chatMessage = await ChatMessage.create({
				text: `Здравствуйте, хотел обратиться по поводу питомца ${petName}`,
				chatId: existingChat.id,
				sendUserId: res.locals.user.id,
			})
			if (chatMessage) {
				const updatedChat = await Chat.findOne({
					where: { id: existingChat.id },
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
				return res.status(200).json({ message: 'chat find', chat: updatedChat })
			}
		} else {
			// Если чат не существует, создаем новый чат и добавляем сообщение
			const newChat = await Chat.create({
				name: shelter.name,
				createUserId: res.locals.user.id,
			})

			const createChatUsers = await Promise.all([
				ChatUser.create({
					userId: res.locals.user.id,
					chatId: newChat.id,
				}),
				ChatUser.create({
					userId: userShelter.id,
					chatId: newChat.id,
				}),
			])

			const chatMessage = await ChatMessage.create({
				text: `Здравствуйте, хотел обратиться по поводу питомца ${petName}`,
				chatId: newChat.id,
				sendUserId: res.locals.user.id,
			})

			const chat = await Chat.findOne({
				where: { id: newChat.id },
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

			return res.status(200).json({ message: 'success', chat })
		}
	} catch (error) {
		console.error(error)
		return res.status(500).json({ error: error.message })
	}
})
router.post('/:chatId/messages', verifyAccessToken, async (req, res) => {
	try {
		const { chatId } = req.params
		const { text } = req.body
		const newChat = await ChatMessage.create({
			text,
			chatId,
			sendUserId: res.locals.user.id,
		})
		if (newChat) {
			const chat = await Chat.findOne({
				where: { id: newChat.id },
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
			res.status(200).json({ message: 'success', chat })
		} else {
			return res.status(404).json({ message: 'Сообщение не создано' })
		}
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

router.delete('/:chatId/messages/:messageId', async (req, res) => {
	try {
		const { chatId, messageId } = req.params
		const deleteMessage = await ChatMessage.destroy({
			where: { id: messageId, chatId: chatId, sendUserId: 1 },
		})
		if (deleteMessage > 0) {
			const chat = await Chat.findOne({
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
			res.status(200).json({ message: 'success', chat })
		} else {
			return res.status(404).json({ message: 'Сообщение не удалено' })
		}
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

module.exports = router
