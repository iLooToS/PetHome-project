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
					separate: true, 
					order: [['createdAt', 'ASC']], // Сортировка сообщений
				},
			],
			order: [['id', 'ASC']], // Сортировка чатов
		});
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
			include: [ChatUser, ChatMessage],
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
		const newChat = await Chat.create({
			name: shelter.name,
			createUserId: userShelter.id,
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
			sendUserId: res.locals.user?.id || 1, // используем res.locals.user.id, если доступен
		})
		const chat = await Chat.findOne({
			where: { id: newChat.id },
			include: [ChatUser, ChatMessage],
		})
		return res.status(200).json({ message: 'success', chat })
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
				include: [ChatUser, ChatMessage],
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
				include: [ChatUser, ChatMessage],
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
