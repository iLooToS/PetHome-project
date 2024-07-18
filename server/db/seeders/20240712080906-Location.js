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
  {
    //4
    city: "Санкт-Петербург",
    streetName: "Автовская, д. 31 , лит. И",
    latitude: null,
    longitude: null,
  },
  {
    //5
    city: "Мурманск",
    streetName: "Автопарковый проезд, 20",
    latitude: null,
    longitude: null,
  },
  {
    //6
    city: "Новокузнецк",
    streetName: "село Сосновка, Новокузнецкий район",
    latitude: null,
    longitude: null,
  },
  {
    //7
    city: "Омск",
    streetName: "1 Казахстанская 3 стр 2",
    latitude: null,
    longitude: null,
  },
  {
    //8
    city: "Казань",
    streetName: "Московский просрект 5",
    latitude: null,
    longitude: null,
  },
  {
    //9
    city: "Ставрополь",
    streetName: "проспект Кулакова, 9в к1",
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
