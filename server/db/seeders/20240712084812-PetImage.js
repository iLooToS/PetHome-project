"use strict";
const petImages = [
  {
    petId: 1,
    url: "/img/petImage11.jpg",
  },
  {
    petId: 1,
    url: "/img/petImage12.jpg",
  },
  {
    petId: 2,
    url: "/img/petImage22.jpg",
  },
  {
    petId: 2,
    url: "/img/petImage22.jpg",
  },
  {
    petId: 3,
    url: "/img/petImage33.jpg",
  },
  {
    petId: 3,
    url: "/img/petImage33.jpg",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("PetImages", petImages, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PetImages", null, {});
  },
};
