'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShelterPostImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ShelterPost}) {
      this.belongsTo(ShelterPost, { foreignKey: "shelterPostId" });
    }
  }
  ShelterPostImage.init({
    shelterPostId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'ShelterPosts',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    url: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'ShelterPostImage',
  });
  return ShelterPostImage;
};