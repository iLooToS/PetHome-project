const router = require('express').Router();
const authController = require('../../controllers/authController');

router.post('/registration', authController.registration);

router.post('/authorization', authController.authorization);

router.get('/logout', authController.logout);

module.exports = router;
