const PetServices = require("../services/petServices");
const ShelterServices = require("../services/shelterServices");

exports.getAllPets = async (req, res) => {
  try {
    const pets = await PetServices.getAllPets();
    if (!pets) {
      res.status(400).json({ message: "Питомцев нет" });
      return;
    }
    res.status(200).json({ message: "success", pets });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.getPetById = async (req, res) => {
  try {
    const { petId } = req.params;
    if (!petId) {
      res.status(400).json({ message: "Параметра нет" });
      return;
    }
    const pet = await PetServices.getPetById(+petId);
    if (!pet) {
      res.status(400).json({ message: "Такого питомца нет" });
      return;
    }
    res.status(200).json({ message: "success", pet });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.createPet = async (req, res) => {
  try {
    const {
      shelterId,
      petType,
      petSize,
      name,
      description,
      isSex,
      isCastration,
      age,
      isTemperament,
      isChipping,
      isVaccination,
      isPassport,
    } = req.body;
    if (!shelterId || !petType || !petSize || !name || !description || !isSex) {
      res.status(400).json({ message: "Необходимые поля не заполнены" });
      return;
    }
    const newPet = await PetServices.createPet({
      shelterId: +shelterId,
      petType,
      petSize,
      name,
      description,
      isSex,
      isCastration,
      age: +age,
      isTemperament,
      isChipping,
      isVaccination,
      isPassport,
    });
    if (!newPet) {
      res.status(400).json({ message: "Ошибка создания питомца" });
      return;
    }
    res.status(201).json({ message: "success", newPet });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.updatePet = async (req, res) => {
  try {
    const user = res.locals.user;
    const { petId } = req.params;
    if (!petId) {
      res.status(400).json({ message: "Параметра нет" });
      return;
    }
    const {
      shelterId,
      petType,
      petSize,
      name,
      description,
      isSex,
      isCastration,
      age,
      isTemperament,
      isChipping,
      isVaccination,
      isPassport,
    } = req.body;
    if (!shelterId || !petType || !petSize || !name || !description || !isSex) {
      res.status(400).json({ message: "Необходимые поля не заполнены" });
      return;
    }
    const pet = await PetServices.getPetById(+petId);
    if (!pet) {
      res.status(400).json({ message: "Такого питомца нет" });
      return;
    }
    const shelter = await ShelterServices.getShelterById(+shelterId);
    if (!shelter) {
      res.status(400).json({ message: "Такого приюта нет" });
      return;
    }
    if (shelter.dataValues.userId !== user.id) {
      res.status(403).json({
        message: "Недостаточно прав для редактирования этого питомца",
      });
      return;
    }
    const updatedPet = await PetServices.updatePet(
      +shelter.dataValues.id,
      +petId,
      {
        shelterId,
        petType,
        petSize,
        name,
        description,
        isSex,
        isCastration,
        age,
        isTemperament,
        isChipping,
        isVaccination,
        isPassport,
      }
    );
    if (!updatedPet) {
      res.status(400).json({ message: "Ошибка редактирования питомца" });
      return;
    }
    res.status(200).json({ message: "success", updatedPet });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.deletePet = async (req, res) => {
  try {
    const user = res.locals.user;
    const { petId } = req.params;
    if (!petId) {
      res.status(400).json({ message: "Параметра нет" });
      return;
    }
    const pet = await PetServices.getPetById(+petId);
    if (!pet) {
      res.status(400).json({ message: "Такого питомца нет" });
      return;
    }
    const shelter = await ShelterServices.getShelterById(pet.shelterId);
    if (!shelter) {
      res.status(400).json({ message: "Такого приюта нет" });
      return;
    }
    if (
      shelter.dataValues.id !== pet.dataValues.shelterId ||
      shelter.dataValues.userId !== user.id
    ) {
      res.status(403).json({
        message: "Недостаточно прав для редактирования этого питомца",
      });
      return;
    }
    const deleted = await PetServices.deleteShelter(+petId);
    if (deleted === true) {
      res.status(200).json({ message: "success" });
      return;
    }
    res.status(400).json({ message: "Приют не удален" });
  } catch ({ message }) {
    res.json({ error: message });
  }
};
