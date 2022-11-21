const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const createToken = (payload) => {
const secretKey = fs.readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), 'utf-8');

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const token = jwt.sign(payload, secretKey, jwtConfig);

return token;
};

module.exports = createToken;