"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ShelterPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Shelter, ShelterPostImage, ShelterPostComment }) {
      this.belongsTo(Shelter, { foreignKey: "shelterId" });
      this.hasMany(ShelterPostImage, { foreignKey: "shelterPostId" });
      this.hasMany(ShelterPostComment, { foreignKey: "shelterPostId" });
    }
  }
  ShelterPost.init(
    {
      shelterId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Shelters',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      postName: {
        allowNull: false,
        type: DataTypes.TEXT
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
