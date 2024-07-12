"use strict";
const shelters = [
  {
    userId: 1,
    locationId: 1,
    name: "John Shelter",
    logo: "/img/johnShelter.jpg",
    description: 'Крутой и классный приютик',
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
