const router = require('express').Router();
const verifyRefreshToken = require('../../middleware/verifyRefreshToken');
const tokensController = require('../../controllers/tokensController');

router.get('/refresh', verifyRefreshToken, tokensController.getTokens);

module.exports = router;
