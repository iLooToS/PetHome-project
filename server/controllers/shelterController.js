const ShelterServices = require("../services/shelterServices");
const LocationServices = require("../services/locationServices");

exports.getAllShelters = async (req, res) => {
  try {
    const shelters = await ShelterServices.getAllShelters();
    if (!shelters) {
      res.status(400).json({ message: "Приютов нет" });
      return;
    }
    res.status(200).json({ message: "success", shelters });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.getShelterById = async (req, res) => {
  try {
    const { shelterId } = req.params;
    if (!shelterId) {
      res.status(400).json({ message: "Параметра нет" });
      return;
    }
    const shelter = await MovieServices.getShelterById(+shelterId);
    if (!shelter) {
      res.status(400).json({ message: "Такого приюта нет" });
      return;
    }
    res.status(200).json({ message: "success", shelter });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.createShelter = async (req, res) => {
  try {
    const user = res.locals.user;
    const { name, description, city, streetName } = req.body;
    if (!name || !city || !description || !streetName) {
      res.status(400).json({ message: "Необходимо заполнить все поля" });
      return;
    }
    if (city && streetName) {
      const location = await LocationServices.createLocation({
        city,
        streetName,
      });
      if (location) {
        const createdShelter = await ShelterServices.createShelter({
          userId: user.id,
          name,
          locationId: location.dataValues.id,
          description,
          status: true,
        });
        if (createdShelter) {
          res.status(201).json({ message: "success", shelter: createdShelter });
          return;
        }
        res.status(400).json({ message: "Приют не создался" });
        return;
      }
      res.status(400).json({ message: "Локация не создалась" });
      return;
    }
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.updateShelter = async (req, res) => {
  try {
    const user = res.locals.user;
    const { shelterId } = req.params;
    const { name, description, img } = req.body;
    if (!shelterId) {
      res.status(400).json({ message: "Параметра нет" });
      return;
    }
    const shelter = await ShelterServices.getShelterById(+shelterId);
    if (!shelter) {
      res.status(400).json({ message: "Такого приюта нет" });
      return;
    }
    if (shelter.dataValues.userId !== user.id) {
      res
        .status(403)
        .json({ message: "Недостаточно прав для редактирования этого приюта" });
      return;
    }
    const location = await LocationServices.getLocationById(shelter.locationId);
    if (location) {
      const updatedShelter = await ShelterServices.updateShelter(
        user.id,
        +shelterId,
        {
          name,
          description,
          img
        }
      );
      if (updatedShelter) {
        res.status(200).json({ message: "success", shelter: updatedShelter });
        return;
      }
      res.status(400).json({ message: "Приют не изменен" });
      return;
    }
    res.status(400).json({ message: "Локация не создалась" });
    return;
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.deleteShelter = async (req, res) => {
  try {
    const user = res.locals.user;
    const { shelterId } = req.params;
    if (!shelterId) {
      res.status(400).json({ message: "Параметра нет" });
      return;
    }
    const shelter = await ShelterServices.getShelterById(+shelterId);
    if (!shelter) {
      res.status(400).json({ message: "Такого приюта нет" });
      return;
    }
    if (shelter.dataValues.userId!== user.id) {
      res
       .status(403)
       .json({ message: "Недостаточно прав для удаления этого приюта" });
      return;
    }
    const deleted = await ShelterServices.deleteShelter(+shelterId);
    if (deleted === true) {
      res.status(200).json({ message: "success" });
      return;
    }
    res.status(400).json({ message: "Приют не удален" });
  } catch ({ message }) {
    res.json({ error: message });
  }
}