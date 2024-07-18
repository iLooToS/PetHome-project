'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Chats', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			createUserId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
					key: 'id',
				},
			},
			createdAt: {
				allowNull: true,
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
			updatedAt: {
				allowNull: true,
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Chats')
	},
}
