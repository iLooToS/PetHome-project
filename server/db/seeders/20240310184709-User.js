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
					img: '/img/rttrrtrt.jpg',
				},
				{
					roleId: 2,
					name: 'Админ',
					lastName: 'Админович',
					email: 'admin@admin',
					password: await bcrypt.hash('12345', 10),
					img: '/img/admin.png',
				},
				{
					roleId: 3,
					name: 'Кот',
					lastName: 'Кискович',
					email: 'kot@kot',
					password: await bcrypt.hash('12345', 10),
					img: '/img/wild1_700.jpg',
				},
				{
					roleId: 1,
					name: 'Ирина',
					lastName: 'Васильева',
					email: 'VasIra@mail.ru',
					password: await bcrypt.hash('12345', 10),
					img: '/img/szczsczsc.jpg',
				},
				{
					// 5
					roleId: 1,
					name: 'Капитан',
					lastName: 'Таран',
					email: 'homa666@mail.ru',
					password: await bcrypt.hash('12345', 10),
					img: '/img/awdwadd.jfif',
				},
				{
					//6
					roleId: 1,
					name: 'Наталья',
					lastName: 'Авлвсевич',
					email: 'NataAva@mail.ru',
					password: await bcrypt.hash('12345', 10),
					img: '/img/argerg.jpg',
				},
				{
					//7
					roleId: 1,
					name: 'Лидия',
					lastName: 'Романова',
					email: 'lromanova@gmail.com',
					password: await bcrypt.hash('12345', 10),
					img: '/img/wafwafawfawf.jpg',
				},
				{
					//8
					roleId: 1,
					name: 'Татьяна',
					lastName: 'Сибирская',
					email: 'SibaTanya@mail.ru',
					password: await bcrypt.hash('12345', 10),
					img: '/img/adwdwd.jpg',
				},
				{
					//9
					roleId: 1,
					name: 'Омский',
					lastName: 'Хвостик',
					email: 'hvostikomsk@gmail.com',
					password: await bcrypt.hash('12345', 10),
					img: '/img/BOMZ.jpg',
				},
				{
					//10
					roleId: 1,
					name: 'Люся',
					lastName: 'Домашняя',
					email: 'kot@mail.ru',
					password: await bcrypt.hash('12345', 10),
					img: '/img/mirrow.jpg',
				},
				{
					//11
					roleId: 1,
					name: 'Валентина',
					lastName: 'Кот',
					email: 'valyacat@mail.ru',
					password: await bcrypt.hash('12345', 10),
					img: '/img/998044806.jpg',
				},
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {})
	},
}
