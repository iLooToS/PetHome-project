const ShelterServices = require("../services/shelterServices");
const LocationServices = require("../services/locationServices");

exports.updateShelter = async (req, res) => {
    try {
      const user = res.locals.user;
      const { shelterId } = req.params;
      const { name, description, img, status } = req.body;
      if (!shelterId) {
        res.status(400).json({ message: "Параметра нет" });
        return;
      }
      const shelter = await ShelterServices.getShelterById(+shelterId);
      if (!shelter) {
        res.status(400).json({ message: "Такого приюта нет" });
        return;
      }
      if (user.roleId === 2) {
        const updatedShelter = await ShelterServices.confirmShelter(+shelterId, {
          status,
        });
        if (updatedShelter) {
          res.status(200).json({ message: "success", shelter: updatedShelter });
          return;
        }
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
            img,
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