const router = require('express').Router();
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ message: 'success', users });
  } catch ({ message }) {
    res.status(500), json({ error: message });
  }
});

module.exports = router;
