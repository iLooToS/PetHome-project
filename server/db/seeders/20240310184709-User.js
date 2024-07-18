'use strict'
const bcrypt = require('bcrypt')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					roleId: 1,
					name: 'Влад',
					lastName: 'Владикович',
					email: 'vladik@vladik',
					password: await bcrypt.hash('12345', 10),
					img: '/img/userPhoto.jpg',
				},
				{
					roleId: 2,
					name: 'Админ',
					lastName: 'Админович',
					email: 'admin@admin',
					password: await bcrypt.hash('12345', 10),
					img: '/img/userPhoto.jpg',
				},
				{
					roleId: 3,
					name: 'Кот',
					lastName: 'Кискович',
					email: 'kot@kot',
					password: await bcrypt.hash('12345', 10),
					img: '/img/userPhoto.jpg',
				},
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {})
	},
}
