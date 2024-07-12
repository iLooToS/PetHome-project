'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShelterImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Shelter}) {
      this.belongsTo(Shelter, { foreignKey: "shelterId"});
    }
  }
  ShelterImage.init({
    shelterId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Shelters',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    url: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'ShelterImage',
  });
  return ShelterImage;
};