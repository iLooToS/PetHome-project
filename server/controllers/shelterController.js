const ShelterServices = require("../services/shelterServices");

exports.getAllShelters = async (req, res) => {
  try {
    const shelters = await ShelterServices.getAllShelters();
    if (shelters) {
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
    if (shelterId) {
      res.status(400).json({ message: "Параметра нет" });
      return;
    }
    const shelter = await MovieServices.getShelterById(+shelterId);
    if (shelter) {
      res.status(400).json({ message: "Такого приюта нет" });
      return;
    }
    res.status(200).json({ message: "success", shelter });
  } catch ({ message }) {
    res.json({ error: message });
  }
};
