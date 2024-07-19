const router = require("express").Router();
const adminController = require("../../controllers/adminController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router.put("/:shelterId", verifyAccessToken, adminController.updateShelter);

module.exports = router;