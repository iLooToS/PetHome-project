'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate({
			Role,
			Shelter,
			ShelterReview,
			ShelterPostComment,
			ShelterPostLike,
			ChatUser,
			ChatMessage,
		}) {
			this.belongsTo(Role, { foreignKey: 'roleId' })
			this.hasMany(Shelter, { foreignKey: 'userId' })
			this.hasMany(ShelterReview, { foreignKey: 'userId' })
			this.hasMany(ShelterPostComment, { foreignKey: 'userId' })
			this.hasMany(ShelterPostLike, { foreignKey: 'userId' })
			this.hasMany(ChatUser, { foreignKey: 'userId' })
			this.hasMany(ChatMessage, { foreignKey: 'sendUserId' })
		}
	}
	User.init(
		{
			roleId: {
				allowNull: false,
				type: DataTypes.INTEGER,
				defaultValue: 1,
				references: {
					model: 'Roles',
					key: 'id',
				},
				onUpdate: 'CASCADE',
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
			modelName: 'User',
		}
	)
	return User
}
