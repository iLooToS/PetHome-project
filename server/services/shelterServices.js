const { Shelter, Location, Pet, User, ShelterImage } = require("../db/models");

class ShelterServices {
  async getAllShelters() {
    return Shelter.findAll({ include: [Location, Pet, User, ShelterImage] });
  }

  async getShelterById(id) {
    return Shelter.findByPk(id, {
      include: [Location, Pet, User, ShelterImage],
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

	async shelterImage(data) {
		return ShelterImage.create(data)
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
