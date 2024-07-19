'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShelterPostComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, ShelterPost}) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(ShelterPost, { foreignKey: "shelterPostId" });
    }
  }
  ShelterPostComment.init({
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
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE'
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'ShelterPostComment',
  });
  return ShelterPostComment;
};