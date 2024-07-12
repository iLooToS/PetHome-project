"use strict";
const posts = [
  {
    shelterId: 1,
    text: "У нас есть новые собаки!",
  },
  {
    shelterId: 1,
    text: "У нас есть новые коты!",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ShelterPosts", posts, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ShelterPosts", null, {});
  },
};
