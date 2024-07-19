"use strict";
const shelterPostLikes = [
  {
    shelterPostId: 1,
    userId: 1,
  },
  {
    shelterPostId: 2,
    userId: 1,
  },
];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ShelterPostLikes", shelterPostLikes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ShelterPostLikes", null, {});
  },
};
