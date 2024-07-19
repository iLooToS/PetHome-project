const ShelterServices = require("../services/shelterServices");
const LocationServices = require("../services/locationServices");
const { Shelter } = require("../db/models");

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
    const shelter = await ShelterServices.getShelterById(+shelterId);
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
    const { name, description, city, streetName, phone } = req.body;
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
        const { filename } = req.file;
        const createdShelter = await ShelterServices.createShelter({
          userId: user.id,
          name,
          locationId: location.dataValues.id,
          description,
          phone,
          status: false,
          logo: `/img/${filename}`,
        });
        if (createdShelter) {
          const shelterImage = await ShelterServices.shelterImage({
            shelterId: createdShelter.id,
            url: `/img/${filename}`,
          });
          if (createdShelter && shelterImage) {
            const createdShelterDone = await ShelterServices.getShelterById(
              createdShelter.id
            );
            res
              .status(201)
              .json({ message: "success", shelter: createdShelterDone });
            return;
          }
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
    if (user.roleId === 2) {
      const deleted = await ShelterServices.deleteShelter(+shelterId);
      if (deleted === true) {
        res.status(200).json({ message: "success", id: +shelterId });
        return;
      }
      res.status(400).json({ message: "Приют не удален" });
      return;
    }
    if (shelter.dataValues.userId !== user.id) {
      res
        .status(403)
        .json({ message: "Недостаточно прав для удаления этого приюта" });
      return;
    }
    const deleted = await ShelterServices.deleteShelter(+shelterId);
    if (deleted === true) {
      res.status(200).json({ message: "success", id: +shelterId });
      return;
    }
    res.status(400).json({ message: "Приют не удален" });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

// exports.updateShelter = async (req, res) => {
//   try {
//     const user = res.locals.user;
//     const { shelterId } = req.params;
//     const { name, description, img, status } = req.body;
//     if (!shelterId) {
//       res.status(400).json({ message: "Параметра нет" });
//       return;
//     }
//     const shelter = await ShelterServices.getShelterById(+shelterId);
//     if (!shelter) {
//       res.status(400).json({ message: "Такого приюта нет" });
//       return;
//     }
//     if (user.roleId === 2) {
//       const updatedShelter = await ShelterServices.confirmShelter(+shelterId, {
//         status,
//       });
//       if (updatedShelter) {
//         res.status(200).json({ message: "success", shelter: updatedShelter });
//         return;
//       }
//     }
//     if (shelter.dataValues.userId !== user.id) {
//       res
//         .status(403)
//         .json({ message: "Недостаточно прав для редактирования этого приюта" });
//       return;
//     }
//     const location = await LocationServices.getLocationById(shelter.locationId);
//     if (location) {
//       const updatedShelter = await ShelterServices.updateShelter(
//         user.id,
//         +shelterId,
//         {
//           name,
//           description,
//           img,
//         }
//       );
//       if (updatedShelter) {
//         res.status(200).json({ message: "success", shelter: updatedShelter });
//         return;
//       }
//       res.status(400).json({ message: "Приют не изменен" });
//       return;
//     }
//     res.status(400).json({ message: "Локация не создалась" });
//     return;
//   } catch ({ message }) {
//     res.json({ error: message });
//   }
// };

exports.updateInfoShelter = async (req, res) => {
  try {
    const { user } = res.locals;
    const { name, description, streetName, city, phone, shelterId } = req.body;

    if (!name || !description || !streetName || !city || !phone) {
      res.status(400).json({ message: "Необходимо заполнить все поля" });
      return;
    }
    const currentShelter = await Shelter.findOne({
      where: { userId: user.id, id: +shelterId },
    });
    if (currentShelter) {
      const currentLocation = await LocationServices.getLocationById(
        currentShelter.locationId
      );
      if (currentLocation) {
        await LocationServices.updateLocation(currentLocation.id, {
          streetName,
          city,
        });
      }
    }
    if (req.file && currentShelter) {
      const { filename } = req.file;
      const updatedShelter = await ShelterServices.updateShelter(
        currentShelter.id,
        user.id,
        {
          name,
          description,
          phone,
          logo: `/img/${filename}`,
        }
      );
      if (updatedShelter) {
        const getShelter = await ShelterServices.getShelterById(
          updatedShelter.id
        );
        res.status(200).json({ message: "success", shelter: getShelter });
        return;
      }
    }
    if (currentShelter) {
      const updatedShelter = await ShelterServices.updateShelter(
        currentShelter.id,
        user.id,
        {
          name,
          description,
          phone,
        }
      );
      if (updatedShelter) {
        const getShelter = await ShelterServices.getShelterById(
          updatedShelter.id
        );
        res.status(200).json({ message: "success", shelter: getShelter });
      } else {
        res.status(404).json({ message: "Приют не найден" });
      }
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
