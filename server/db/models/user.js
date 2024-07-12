"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Role}) {
      this.belongsTo(Role, { foreignKey: "roleId" });
    }
  }
  User.init(
    {
      roleId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Roles",
          key: "id",
        },
        onUpdate: "CASCADE",
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      lastName: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
