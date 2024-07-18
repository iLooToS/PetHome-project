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
  {
    userId: 4,
    locationId: 2,
    name: "Ржевка",
    logo: "/img/logo 1.jpg",
    description: "Приют для бездомных кошек и собак",
    phone: "+7(921) 741-49-01",
    status: true,
  },
  {
    //3
    userId: 5,
    locationId: 3,
    name: "Приют Бирюлёво",
    logo: "/img/LOGO 2.png",
    description:
      "Приют для бездомных животных в Москве. У нас живёт более 2500 собак и кошек. Им нужна ваша помощь!",
    phone: "+7 (915) 120-16-21",
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
