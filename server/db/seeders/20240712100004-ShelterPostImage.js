"use strict";
const postImages = [
  {
    shelterPostId: 1,
    url: "/img/postnew1.jpeg",
  },
  {
    shelterPostId: 2,
    url: "/img/wdawdawdawd.jpg",
  },
  {
    shelterPostId: 3,
    url: "/img/post2pr1.jpg",
  },
  {
    shelterPostId: 5,
    url: "/img/post1pr2.jpg",
  },
  {
    shelterPostId: 8,
    url: "/img/postpr3.jpg",
  },
  {
    shelterPostId: 9,
    url: "/img/post1pr5.jpg",
  },
  {
    shelterPostId: 10,
    url: "/img/post2pr5.jpg",
  },
  {
    shelterPostId: 11,
    url: "/img/post1pr6.jpg",
  },
  {
    shelterPostId: 12,
    url: "/img/post2pr6.jpg",
  },
  {
    shelterPostId: 13,
    url: "/img/post1pr7.jpg",
  },
  {
    shelterPostId: 14,
    url: "/img/post2pr7.jpg",
  },
  {
    shelterPostId: 17,
    url: "/img/post1pr9.jpg",
  },
  {
    shelterPostId: 18,
    url: "/img/post2pr9.jpg",
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
