'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.bulkInsert('Chats', [
  {
   name: 'Чат первый',
   createUserId: 1
 },
  {
   name: 'Чат Второй',
   createUserId: 2
 },
  {
   name: 'Чат Третий',
   createUserId: 3
 }
], {});
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Chats', null, {});
     
  }
};
