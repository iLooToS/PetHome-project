"use strict";
const shelters = [
  {
    userId: 1,
    locationId: 1,
    name: "John Shelter",
    img: "/img/johnShelter.jpg",
    status: true,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Shelters", shelters, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Shelters", null, {});
  },
};
