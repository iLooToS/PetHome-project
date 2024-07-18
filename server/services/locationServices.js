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

  async updateLocation(id,data) {
    const location = await Location.findByPk(id);
    if (location) {
      return location.update(data);
    }
    return null;
  }

}

module.exports = new LocationServices();