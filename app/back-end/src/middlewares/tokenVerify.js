const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const tokenVerify = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const secretKey = fs.readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), 'utf-8');
    const payload = jwt.verify(token, secretKey);
    req.user = payload.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  };

module.exports = tokenVerify; 