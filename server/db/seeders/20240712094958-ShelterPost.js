"use strict";
const posts = [
  {
    shelterId: 1,
    postName: "Очень крутой",
    text: "У нас есть новые собаки!",
  },
  {
    shelterId: 1,
    postName: "Очень не крутой",
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
