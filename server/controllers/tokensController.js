const generateTokens = require('../utils/authUtils');

exports.getTokens = (req, res) => {
  const { user } = res.locals;
  const { accessToken, refreshToken } = generateTokens({ user });
  res
    .cookie('refresh', refreshToken, { httpOnly: true })
    .status(200)
    .json({ message: 'success', accessToken, user });
};