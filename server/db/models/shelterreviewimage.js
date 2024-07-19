'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShelterReviewImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ShelterReview}) {
      this.belongsTo(ShelterReview, { foreignKey: "shelterReviewId"});
    }
  }
  ShelterReviewImage.init({
    shelterReviewId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "ShelterReviews",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    url: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'ShelterReviewImage',
  });
  return ShelterReviewImage;
};