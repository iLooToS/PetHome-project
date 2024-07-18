const router = require("express").Router();
const shelterController = require("../../controllers/shelterController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");
const upload = require("../../middleware/upload");

router.get("/", shelterController.getAllShelters);

router.get("/:shelterId", shelterController.getShelterById);

router.post(
  "/",
  verifyAccessToken,
  upload.single("photo"),
  shelterController.createShelter
);

router.put(
    "/update",
    verifyAccessToken,
    upload.single("photo"),
    shelterController.updateInfoShelter
);

// router.put("/:shelterId", verifyAccessToken, shelterController.updateShelter);

router.delete(
  "/:shelterId",
  verifyAccessToken,
  shelterController.deleteShelter
);

module.exports = router;
