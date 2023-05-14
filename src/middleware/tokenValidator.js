const jwt = require('jsonwebtoken');

const validateJwt = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const tokenVal = jwt.verify(authorization, process.env.JWT_SECRET);
    req.user = tokenVal;
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = {
  validateJwt,
};