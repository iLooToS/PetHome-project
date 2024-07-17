const { Shelter, Location, Pet, User } = require("../db/models");

class ShelterServices {
  async getAllShelters() {
    return Shelter.findAll({ include: [Location, User] });
  }

  async getShelterById(id) {
    return Shelter.findByPk(id, {
      include: [Location, Pet, User],
    });
  }
  async createShelter(body) {
    return Shelter.create(body);
  }

  async confirmShelter(id, body) {
    const shelter = await Shelter.findByPk(id);
    if (shelter) {
      return shelter.update(body);
    }
    return null;
  }

  async updateShelter(id, userId, body) {
    const shelter = await Shelter.findOne({ where: { id, userId } });
    if (shelter) {
      return shelter.update(body);
    }
    return null;
  }

  async deleteShelter(id) {
    const shelter = await Shelter.findOne({ where: { id } });
    if (shelter) {
      shelter.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new ShelterServices();
