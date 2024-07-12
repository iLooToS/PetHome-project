"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ShelterPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Shelter, ShelterPostImage }) {
      this.belongsTo(Shelter, { foreignKey: "shelterId" });
      this.hasMany(ShelterPostImage, { foreignKey: "shelterPostId" });
    }
  }
  ShelterPost.init(
    {
      shelterId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Shelters",
          key: "id",
        },
        onUpdate: "CASCADE",
      },
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "ShelterPost",
    }
  );
  return ShelterPost;
};
