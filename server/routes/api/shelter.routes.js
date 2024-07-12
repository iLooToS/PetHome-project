const router = require('express').Router();
const shelterController = require('../../controllers/shelterController');
const verifyAccessToken = require('../../middleware/verifyAccessToken');

router
  .get('/', shelterController.getAllShelters)

  .get('/:shelterId', shelterController.getShelterById)

module.exports = router;