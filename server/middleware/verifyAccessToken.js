require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../db/models');
async function verifyAccessToken (req, res, next) {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN);

    // user = await User.findOne({
    //   where: { id: user.id },
    // });

    res.locals.user = user;

// console.log(res.locals.user);

    next();
  } catch (error) {
    console.log('Invalid access token');
    res.status(403).send('Invalid access token');
  }
}

module.exports = verifyAccessToken;
