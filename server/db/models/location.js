'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Shelter}) {
      this.hasOne(Shelter, { foreignKey: "locationId" });
    }
  }
  Location.init({
    city: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    streetName: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    latitude: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    longitude: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};