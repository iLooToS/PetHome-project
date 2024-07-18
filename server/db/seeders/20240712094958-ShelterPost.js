"use strict";
const posts = [
  {
    shelterId: 1,
    postName: "Очень крутой",
    text: "У нас есть новые собаки!",
  },
  {
    shelterId: 1,
    postName: "Очень не крутой",
    text: "У нас есть новые коты!",
  },
  {
    //3
    shelterId: 2,
    postName: "Домашний привет от Дивы!",
    text: 'Свой домашний привет передает красавица Дива! Кошечка приехала в наш приют из Донбасса."Дива передает вам привет)И хочет сказать, что у нее 2 основных режима: сладкая булочка в светлое время суток и неукротимая львица в сумерки)Особенно остро желание побегать по кухонным шкафам просыпается в 3 часа ночи)',
  },
  {
    //4
    shelterId: 2,
    postName: "Спасибо нашему другу ТОКИО-CITY за поддержку!",
    text: "Сегодня наш друг и партнёр сеть ресторанов 'ТОКИО-CITY' сделали пожертвование в пользу фонда 'Ржевка' в размере 500 000 рублей. Эта сумма поможет нам оплатить медицинские расходы для нескольких десятков животных. Спасибо за помощь нашим хвостикам!",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ShelterPosts", posts, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ShelterPosts", null, {});
  },
};
