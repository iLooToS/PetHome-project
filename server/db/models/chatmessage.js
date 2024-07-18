'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Chat}) {
      this.belongsTo(User, {foreignKey: "sendUserId"});
      this.belongsTo(Chat, {foreignKey: "chatId"});
    }
  }
  ChatMessage.init({
    text: DataTypes.STRING,
    sendUserId: DataTypes.NUMBER,
    chatId: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'ChatMessage',
  });
  return ChatMessage;
};