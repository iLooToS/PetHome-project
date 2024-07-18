const router = require("express").Router();
const commentController = require("../../controllers/commentController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router.post("/", verifyAccessToken, commentController.createComment);

module.exports = router;
