"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shelter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Location, ShelterImage, Pet, ShelterReview, ShelterPost }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Location, { foreignKey: "locationId" });
      this.hasMany(ShelterImage, { foreignKey: "shelterId" });
      this.hasMany(Pet, { foreignKey: "shelterId" });
      this.hasMany(ShelterReview, { foreignKey: "shelterId" });
      this.hasMany(ShelterPost, { foreignKey: "shelterId" });
    }
  }
  Shelter.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      locationId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Locations",
          key: "id",
        },
        onUpdate: "CASCADE",
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      img: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Shelter",
    }
  );
  return Shelter;
};
