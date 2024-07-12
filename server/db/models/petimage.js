'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PetImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Pet}) {
      this.belongsTo(Pet, {foreignKey: "petId"});
    }
  }
  PetImage.init({
    petId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Pets',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    url: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'PetImage',
  });
  return PetImage;
};