"use strict";
const pets = [
  {
    shelterId: 1,
    petType: "Собака",
    petSize: "Большая",
    name: "Ti Big Dog",
    age: 1,
    description: "Очень любит гулять",
    isSex: true,
    isCastration: false,
    isTemperament: true,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    shelterId: 1,
    petType: "Собака",
    petSize: "Маленькая",
    name: "Lil Li Dog",
    age: 4,
    description: "Очень любит есть",
    isSex: false,
    isCastration: false,
    isTemperament: true,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    shelterId: 1,
    petType: "Кошка",
    petSize: "Средняя",
    name: "Cat Li",
    age: 10,
    description: "Очень любит спать",
    isSex: false,
    isCastration: false,
    isTemperament: true,
    isChipping: true,
    isVaccination: true,
    isPassport: false,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Pets", pets, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pets", null, {});
  },
};
