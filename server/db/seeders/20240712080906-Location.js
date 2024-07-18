"use strict";
const locations = [
  {
    city: "Санкт-Петербург",
    streetName: "Лиговский проспект, 140",
    latitude: 59.913749,
    longitude: 30.350741,
  },
  {
    city: "Санкт-Петербург",
    streetName: "Пушкина-Колотушкина, 44",
    latitude: null,
    longitude: null,
  },
  {
    //3
    city: "Москва",
    streetName: "Востряковский пр-д, 10А, Москва, 117403",
    latitude: null,
    longitude: null,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Locations", locations, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Locations", null, {});
  },
};
