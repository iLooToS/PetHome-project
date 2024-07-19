"use strict";
const reviews = [
  {
    userId: 1,
    shelterId: 1,
    text: "Хороший",
  },
];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ShelterReviews", reviews, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ShelterReviews", null, {});
  },
};
