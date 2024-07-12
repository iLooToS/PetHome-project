"use strict";
const roles = [
  {
    name: "User",
  },
  {
    name: "Admin",
  },
  {
    name: "Shelter",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", roles, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
