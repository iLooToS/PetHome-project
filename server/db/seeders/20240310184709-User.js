"use strict";
const users = [
  {
    roleId: 1,
    name: "John",
    lastName: 'Doe',
    email: "john@mail.ru",
    password: "123",
    img:'/img/userPhoto.jpg',
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
