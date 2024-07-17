"use strict";
const shelters = [
  {
    userId: 1,
    locationId: 1,
    name: "John Shelter",
    logo: "/img/johnShelter.jpg",
    description: "A family-friendly shelter for dogs.",
    phone: "+7 (900) 000-00-00",
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
