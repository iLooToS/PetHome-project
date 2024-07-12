"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      shelterId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Shelters",
          key: "id",
        }
      },
      petType: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      petSize: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      age: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      isSex: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      isCastration: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      isTemperament: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      isChipping: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      isVaccination: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      isPassport: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pets");
  },
};
