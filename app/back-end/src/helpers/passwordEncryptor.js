const md5 = require('md5');

const passwordEncryptor = (password) => {
  const encryptedPassword = md5(password);
  return encryptedPassword;
};

module.exports = passwordEncryptor;