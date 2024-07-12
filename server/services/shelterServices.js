const { Shelter } = require("../db/models");

class ShelterServices {
  async getAllShelters() {
    return Shelter.findAll();
  }

  async getShelterById(id) {
    return Shelter.findByPk(id);
  }
}

module.exports = new ShelterServices();
