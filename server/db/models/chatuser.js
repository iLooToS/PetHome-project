'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatUser extends Model {
    static associate({User,Chat}) {
      this.belongsTo(User, {foreignKey: "userId"});
      this.belongsTo(Chat, {foreignKey: "chatId"});
    }
  }
  ChatUser.init({
    userId: DataTypes.NUMBER,
    chatId: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'ChatUser',
  });
  return ChatUser;
};