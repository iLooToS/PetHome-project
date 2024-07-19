"use strict";
const shelterPostComments = [
  {
    shelterPostId: 1,
    userId: 1,
    text: "Круто!",
  },
  {
    shelterPostId: 2,
    userId: 1,
    text: "Не круто!",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ShelterPostComments",
      shelterPostComments,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ShelterPostComments", null, {});
  },
};
