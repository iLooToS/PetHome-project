const router = require("express").Router();
const postController = require("../../controllers/postController");
const upload = require("../../middleware/upload");

const verifyAccessToken = require("../../middleware/verifyAccessToken");

router.get("/", postController.getAllPosts);

router.get("/:petId", postController.getPostById);

router.post(
  "/",
  verifyAccessToken,
  upload.single("photo"),
  postController.createPost
);

module.exports = router;
