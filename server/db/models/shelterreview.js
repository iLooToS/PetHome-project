'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShelterReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Shelter, ShelterReviewImage}) {
      this.belongsTo(User, { foreignKey: "userId"});
      this.belongsTo(Shelter, { foreignKey: "shelterId"});
      this.hasMany(ShelterReviewImage, { foreignKey: "shelterReviewId"});
    }
  }
  ShelterReview.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE'
    },
    shelterId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Shelters',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'ShelterReview',
  });
  return ShelterReview;
};