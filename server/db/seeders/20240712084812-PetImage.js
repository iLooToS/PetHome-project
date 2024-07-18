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
  {
    petId: 4,
    url: "/img/uma.jpg",
  },
  {
    petId: 5,
    url: "/img/Legenda.jpg",
  },
  {
    petId: 6,
    url: "/img/brungilda.jpg",
  },
  {
    petId: 7,
    url: "/img/rhizkic.jpg",
  },
  {
    petId: 8,
    url: "/img/avrora.jpg",
  },
  {
    petId: 9,
    url: "/img/per4ik.jpg",
  },
  {
    petId: 9,
    url: "/img/per4ik2.jpg",
  },
  {
    petId: 9,
    url: "/img/per4ik3.jpg",
  },
  {
    petId: 10,
    url: "/img/brusketka.jpg",
  },
  {
    petId: 10,
    url: "/img/brusketka2.jpg",
  },
  {
    petId: 10,
    url: "/img/brusketka3.jpg",
  },
  {
    petId: 11,
    url: "/img/masha.jpg",
  }
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
