const router = require("express").Router();
const authController = require("../../controllers/authController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");
const upload = require("../../middleware/upload");

router.post("/registration", authController.registration);

router.post("/authorization", authController.authorization);

router.get("/logout", authController.logout);

router.put(
  "/update",
  verifyAccessToken,
  upload.single("photo"),
  authController.update
);

module.exports = router;
