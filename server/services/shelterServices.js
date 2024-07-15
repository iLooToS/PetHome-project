const { Shelter, Location, Pet } = require("../db/models");

class ShelterServices {
  async getAllShelters() {
    return Shelter.findAll({ include: [Location] });
  }

  async getShelterById(id) {
    return Shelter.findByPk(id, {
      include: [Location, Pet],
    });
  }
  async createShelter(body) {
    return Shelter.create(body);
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
