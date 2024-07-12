'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Shelter, PetImage}) {
      this.belongsTo(Shelter, {foreignKey: "shelterId"});
      this.hasMany(PetImage, {foreignKey: "petId"})
    }
  }
  Pet.init({
    shelterId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Shelters",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    petType: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    petSize: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    age: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    isSex: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    isCastration: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
    isTemperament: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
    isChipping: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
    isVaccination: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
    isPassport: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};