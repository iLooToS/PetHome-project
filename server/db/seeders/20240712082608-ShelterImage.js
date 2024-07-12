"use strict";
const shelterImages = [
  {
    shelterId: 1,
    url: "/img/johnShelterImage1.jpg",
  },
  {
    shelterId: 1,
    url: "/img/johnShelterImage2.jpg",
  },
  {
    shelterId: 1,
    url: "/img/johnShelterImage3.jpg",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ShelterImages", shelterImages, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ShelterImages", null, {});
  },
};
