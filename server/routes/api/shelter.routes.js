const router = require("express").Router();
const shelterController = require("../../controllers/shelterController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router.get("/", shelterController.getAllShelters);

router.get("/:shelterId", shelterController.getShelterById);

//Создается сразу со status: true.
router.post("/", verifyAccessToken, shelterController.createShelter);

router.put("/:shelterId", verifyAccessToken, shelterController.updateShelter);

router.put("/admin/:shelterId", verifyAccessToken, shelterController.updateShelter);

router.delete('/:shelterId', verifyAccessToken, shelterController.deleteShelter);

module.exports = router;
