const router = require("express").Router();
const { User } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    const clearUsers = users.map((user) => {
      delete user.dataValues.password;
      delete user.dataValues.roleId;
      return user;
    });
    res.status(200).json({ message: "success", users: clearUsers });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
