const { User } = require('../db/models');

class UserService {
  async getUserByEmail(email) {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    return user;
  }

  async createUser(data) {
    const user = await User.create(data);
    delete user.dataValues.password;
    return user;
  }

  async updateUser(id, data) {
    const user = await User.findByPk(id);
    if (user) {
      return user.update(data);
    }
    return null;
  }
}

module.exports = new UserService();
