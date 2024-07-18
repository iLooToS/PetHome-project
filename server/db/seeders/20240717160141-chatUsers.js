'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'ChatUsers',
			[
				{
					userId: 1,
					chatId: 1,
				},
				{
					userId: 2,
					chatId: 1,
				},
				{
					userId: 1,
					chatId: 2,
				},
				{
					userId: 2,
					chatId: 2,
				},
				{
					userId: 2,
					chatId: 3,
				},
				{
					userId: 3,
					chatId: 3,
				},
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('ChatUsers', null, {})
	},
}
