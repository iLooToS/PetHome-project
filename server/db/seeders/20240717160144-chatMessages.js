'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'ChatMessages',
			[
				{
					text: 'Привет в 1 чате',
					sendUserId: 1,
					chatId: 1,
				},
				{
					text: 'Пока в 1 чате',
					sendUserId: 2,
					chatId: 1,
				},
				{
					text: 'Пока в 2 чате',
					sendUserId: 2,
					chatId: 2,
				},
				{
					text: 'Привет в 2 чате',
					sendUserId: 1,
					chatId: 2,
				},
				{
					text: 'Привет в 3 чате',
					sendUserId: 2,
					chatId: 3,
				},
				{
					text: 'Пока в 3 чате',
					sendUserId: 3,
					chatId: 3,
				},
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		Example: await queryInterface.bulkDelete('ChatMessages', null, {})
	},
}
