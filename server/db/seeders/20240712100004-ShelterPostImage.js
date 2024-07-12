"use strict";
const postImages = [
  {
    shelterPostId: 1,
    url: "/img/postImage11.jpg",
  },
  {
    shelterPostId: 1,
    url: "/img/postImage12.jpg",
  },
  {
    shelterPostId: 2,
    url: "/img/postImage22.jpg",
  },
  {
    shelterPostId: 2,
    url: "/img/postImage22.jpg",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ShelterPostImages", postImages, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ShelterPostImages", null, {});
  },
};
