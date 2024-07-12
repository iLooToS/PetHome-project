const { Location } = require("../db/models");

class LocationServices {
  async getAllLocations() {
    return Location.findAll();
  }

  async getLocationById(id) {
    return Location.findByPk(id);
  }
  async createLocation(data) {
    return Location.create(data);
  }
}

module.exports = new LocationServices();