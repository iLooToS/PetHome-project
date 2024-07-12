"use strict";
const locations = [
  {
    city: "Санкт-Петербург",
    streetName: "Лиговский проспект, 140",
    latitude: 59.913749,
    longitude: 30.350741,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Locations",locations, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Locations", null, {});
  },
};
